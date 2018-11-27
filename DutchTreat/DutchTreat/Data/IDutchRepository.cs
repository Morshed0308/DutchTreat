using System;
using System.Collections.Generic;
using DutchTreat.Data.Entities;

namespace DutchTreat.Data
{
    public interface IDutchRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        IEnumerable<Product> GetProductsByName(string name);
        Order GetOrdersById(int id);


        object GetProductsByCategory();
        object GetProductsByName();
        IEnumerable<Order> GetAllOrders();
        void AddEntity(Object model);
        bool SaveAll();
    }
}