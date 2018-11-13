using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DutchTreat.Model;
using DutchTreat.Services;
using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        
        private readonly IMailService _gmailService;
    
        public AppController (IMailService gmailService)
        {
            _gmailService = gmailService;

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
                _gmailService.SendMessage("morshedshahriar1@gmail.com", model.Subject, $"From: {model.Email}-{model.Messege}");
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
    }
}