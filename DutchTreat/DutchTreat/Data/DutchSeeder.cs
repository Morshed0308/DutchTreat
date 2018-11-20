﻿using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class DutchSeeder
    {
        private readonly DutchContext _context;
        private readonly IHostingEnvironment _env;

        public DutchSeeder(DutchContext context,IHostingEnvironment env)
        {
            _context = context;
            _env = env;
        }
        public void seed()
        {
            _context.Database.EnsureCreated();
            if (!_context.Products.Any())
            {
                var filepath = Path.Combine(_env.ContentRootPath,"Data/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>();
                _context.Products.AddRange(products);
            }
         
        }
    }
}
