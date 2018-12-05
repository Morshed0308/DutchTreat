using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Data;
using DutchTreat.Model;
using DutchTreat.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        
        private readonly IMailService _gmailService;
        private readonly IDutchRepository _repository;

        public AppController (IMailService gmailService,IDutchRepository repository)
        {
            _gmailService = gmailService;
            _repository = repository;
        }


        public IActionResult Index()
        {
            return View();
        }

        
        [HttpGet("Contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("Contact")]
        public IActionResult Contact(Contact model)
        {
            if(ModelState.IsValid)
            {
                _gmailService.SendMessage(model.Email, model.Subject, $"From: {model.Email}-{model.Messege}");
                ViewBag.UserMsg = "Mail Sent";
                ModelState.Clear();
            }

            return View();
        }
        
     



        [HttpGet("About")]
        public IActionResult About()
        {
            ViewBag.title = "About Us";
            return View();
        }

        [Authorize]
        public IActionResult Shop()
        {
            var results = _repository.GetAllProducts();

            return View(results);

        }


        [HttpPost]
        public IActionResult Shop(string Name)
        {
            var result = _repository.GetProductsByName(Name);

        
           return View(result);
        
        }

       

    }
}