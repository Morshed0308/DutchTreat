using DutchTreat.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DutchTreat.Data
{
    public class DutchRepository : IDutchRepository
    {
        private readonly DutchContext _ctx;
        public DutchRepository(DutchContext ctx )
        {
            _ctx = ctx;
        }

        public IEnumerable<Product> GetAllProducts()
        {
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
    }
}
