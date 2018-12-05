using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DutchTreat.Data;
using DutchTreat.Data.Entities;
using DutchTreat.Model;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;

namespace DutchTreat.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes=JwtBearerDefaults.AuthenticationScheme)]
    public class OrdersController : Controller
    {
        private readonly IDutchRepository _respository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<StoreUser> _userManager;

        public OrdersController(IDutchRepository respository,ILogger<OrdersController> logger,IMapper mapper
            ,UserManager <StoreUser>userManager)
        {
            _respository = respository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }
        [HttpGet]
        public IActionResult Get(bool IncludeItems=true)
        {
            try
            {
                var userName = User.Identity.Name;
                var result = _respository.GetAllOrdersByUser(userName,IncludeItems);
                return Ok(_mapper.Map<IEnumerable<Order>,IEnumerable<OrderModel>>(result));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get orders: {e}");
                return BadRequest("Bad request");

            }
        }
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var res=(_respository.GetOrdersById(User.Identity.Name,id));
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
        public async Task <IActionResult> Post([FromBody]OrderModel model)
        {
            try {
                if (ModelState.IsValid)
                {

                    var newOrder = _mapper.Map<OrderModel, Order>(model);
                    if (newOrder.OrderDate == DateTime.MinValue)
                    {
                        newOrder.OrderDate = DateTime.Now;
                    }
                    var curruser =await _userManager.FindByNameAsync(User.Identity.Name);
                    newOrder.User = curruser;

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