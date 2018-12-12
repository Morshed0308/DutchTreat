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
        IEnumerable<Order> GetAllOrders(bool IncludeItems);
        IEnumerable<Order> GetAllOrdersByUser(string user,bool includeItems);
        Order GetOrdersById(string username,int id);
        void AddOrder(Order newOrder);


        object GetProductsByCategory();
        object GetProductsByName();
        
        void AddEntity(Object model);
        bool SaveAll();
        
    }
}