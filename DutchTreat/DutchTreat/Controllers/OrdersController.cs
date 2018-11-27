using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DutchTreat.Data;
using DutchTreat.Data.Entities;
using DutchTreat.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;

namespace DutchTreat.Controllers
{
    [Route("api/[Controller]")]
    public class OrdersController : Controller
    {
        private readonly IDutchRepository _respository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;

        public OrdersController(IDutchRepository respository,ILogger<OrdersController> logger,IMapper mapper )
        {
            _respository = respository;
            _logger = logger;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Order>,IEnumerable<OrderModel>>( _respository.GetAllOrders()));
            }
            catch (Exception e)
            {
                _logger.LogError($"Bad request {e}");
                return BadRequest("Bad request");

            }
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var res=(_respository.GetOrdersById(id));
                if (res != null)
                    return Ok(_mapper.Map<Order, OrderModel>(res));
                else return NotFound();
            }
            catch (Exception e)
            {
                _logger.LogError($"Bad request {e}");
                return BadRequest("Bad request");

            }

        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderModel model)
        {
            try {
                if (ModelState.IsValid)
                {

                    var newOrder = _mapper.Map<OrderModel, Order>(model);
                    if (newOrder.OrderDate == DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }
                    _respository.AddEntity(newOrder);
                    if (_respository.SaveAll())
                    {
                      
                        return Created($"/api/Orders/{newOrder.Id}", _mapper.Map<Order,OrderModel>(newOrder));
                    }

                }
                else
                {
                    return BadRequest(ModelState);
                }                                       

            }
            catch (Exception e) {
                _logger.LogError($"Error Senfing Message{e}");
            }
            return BadRequest();
        }
    
    }
}