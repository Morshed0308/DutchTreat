using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
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
        private readonly UserManager<StoreUser> _userManager;

        public DutchSeeder(DutchContext context, IHostingEnvironment env, UserManager<StoreUser> userManager)
        {
            _ctx = context;
            _env = env;
            _userManager = userManager;
        }

        public UserManager<StoreUser> UserManager { get; }
        public object FirstName { get; private set; }

        public async Task Seed()
        {
            _ctx.Database.EnsureCreated();
            var user = await _userManager.FindByEmailAsync("TheRock@WWE.com");

            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Shahriar",
                    LastName = "Hossain",
                    UserName = "TheRock@WWE.com",
                    Email = "TheRock@WWE.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");

                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create user");
                }


            }



                if (!_ctx.Products.Any())
                {
                    var filepath = Path.Combine(_env.ContentRootPath, "Data/art.json");
                    var json = File.ReadAllText(filepath);
                    var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                    _ctx.Products.AddRange(products);

                    var order = new Order()
                    {
                        OrderDate = DateTime.Now,
                        OrderNumber = "ON001",
                        User = user,
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

