using DutchTreat.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DutchTreat.Data
{
    public class DutchRepository : IDutchRepository
    {
        private readonly DutchContext _ctx;
        private readonly ILogger<DutchRepository> _logger;

        public DutchRepository(DutchContext ctx,ILogger<DutchRepository>logger )
        {
            _ctx = ctx;
            _logger = logger;
        }

        public IEnumerable<Product> GetAllProducts()
        {
             _logger.LogError("Data Retrieve Successfull");

                return _ctx.Products
                       .OrderBy(p => p.Title)
                       .ToList();
            
            
            
        }
        public IEnumerable<Product>GetProductsByCategory(string category)
        {
            return _ctx.Products
                       .Where(p => p.Category == category)
                       .ToList();
        }

        public IEnumerable<Product> GetProductsByName(string name)
        {
            return _ctx.Products
                       .Where(p => p.Title == name)
                       .ToList();
        }

        public object GetProductsByCategory()
        {
            throw new NotImplementedException();
        }

        public object GetProductsByName()
        {
            throw new NotImplementedException();
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }

        public IEnumerable<Product> GetProductByName(string name)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Order> GetAllOrders(bool IncludeItems)
        {
            if (IncludeItems)
            {
                return _ctx.Orders
                .Include(o => o.Items)
                .ThenInclude(p => p.Product)
                .ToList();
            }
            else
            {
                return _ctx.Orders            
                .ToList();


            }
            
        }


        public IEnumerable<Order> GetAllOrdersByUser(string user, bool includeItems)
        {
            if (includeItems)
            {
                return _ctx.Orders
                        .Where(o=>o.User.UserName==user)
                        .Include(o => o.Items)
                        .ThenInclude(p => p.Product)
                        .ToList();
            }
            else
            {
                return _ctx.Orders
                    .Where(o => o.User.UserName == user)
                    .ToList();


            }

        }


        public Order GetOrdersById(string username,int id)
        {
            return _ctx.Orders
                    .Include(o => o.Items)
                    .ThenInclude(p => p.Product)
                    .Where(i=>i.Id==id&& (i.User.UserName==username))
                    .FirstOrDefault();
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public void AddOrder(Order newOrder)
        {
            foreach (var item in newOrder.Items)
            {
                item.Product = _ctx.Products.Find(item.Product.Id);
            }

            AddEntity(newOrder);
        }
    }
}
