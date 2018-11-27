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

        public IEnumerable<Order> GetAllOrders()
        {
            return _ctx.Orders
                .Include(o => o.Items)
                .ThenInclude(p=>p.Product)
                .ToList();
        }

        public Order GetOrdersById(int id)
        {
            return _ctx.Orders
                    .Include(o => o.Items)
                    .ThenInclude(p => p.Product)
                    .Where(i=>i.Id==id)
                    .FirstOrDefault();
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }
    }
}
