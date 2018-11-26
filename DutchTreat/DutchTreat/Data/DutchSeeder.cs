using DutchTreat.Data.Entities;
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
        private readonly DutchContext _ctx;
        private readonly IHostingEnvironment _env;

        public DutchSeeder(DutchContext context,IHostingEnvironment env)
        {
            _ctx = context;
            _env = env;
        }
        public void Seed()
        {
            _ctx.Database.EnsureCreated();
            if (!_ctx. Products.Any())
            {
                var filepath = Path.Combine(_env.ContentRootPath,"Data/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _ctx.Products.AddRange(products);

                var order = new Order()
                {
                    OrderDate = DateTime.Now,
                    OrderNumber = "ON001",
                    Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product=products.First(),
                            Quantity=5,
                            UnitPrice=products.First().Price

                        }
                    }
                };
                _ctx.Orders.Add(order);
                _ctx.SaveChanges();
            }
         
        }
    }
}
