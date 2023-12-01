using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using question2.Data;
using question2.Models;
using question2.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using question2.Exceptions;

namespace question2.Services.Tests
{
    [TestClass()]
    public class CatsServiceTests
    {
        DbContextOptions<ApplicationDbContext> options;
        public CatsServiceTests()
        {
            options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: "CatsService")
                .Options;     
        }

        [TestInitialize] 
        public void Initialize() 
        {
            Cat[] cats = new Cat[]
            {
                new Cat
                {
                    Id = 1,
                    Name = "Foo",
                    Age = 1,
                    House = null
                },
                new Cat
                {
                    Id = 2,
                    Name = "Faa",
                    Age = 2,
                    House = null
                }
            };

            using ApplicationDbContext db = new ApplicationDbContext(options);
            db.Cat.AddRange(cats);
            db.SaveChanges();
        }

        [TestMethod()]
        public void PasDeChat()
        {
            using ApplicationDbContext db = new ApplicationDbContext(options);
            CatsService service = new CatsService(db);

            Cat cat = null;

            House h1 = new House
            {
                    Id = 1,
                    Address = "abc",
                    OwnerName = "Foo",
                    Cats = null
            };

            House h2 = new House
            {
                Id = 2,
                Address = "def",
                OwnerName = "Faa",
                Cats = null
            };

            Assert.ThrowsException<NullReferenceException>(() => service.Move(cat.Id, h1, h2));
        }

        [TestMethod()]
        public void ChatAvecMaison()
        {
            using ApplicationDbContext db = new ApplicationDbContext(options);
            CatsService service = new CatsService(db);

            Cat cat = new Cat
            {
                Id = 1,
                Age = 2,
                Name = "A",
                House = null
            };

            House h1 = new House
            {
                Id = 1,
                Address = "abc",
                OwnerName = "Foo",
                Cats = null
            };

            House h2 = new House
            {
                Id = 2,
                Address = "def",
                OwnerName = "Faa",
                Cats = null
            };

            Assert.ThrowsException<DontStealMyCatException>(() => service.Move(cat.Id, cat.House, h1));
        }

        [TestMethod()]
        public void ChatMauvaiseMaison()
        {
            using ApplicationDbContext db = new ApplicationDbContext(options);
            CatsService service = new CatsService(db);

            Cat cat = new Cat
            {
                Id = 1,
                Age = 2,
                Name = "Foo",
                House = null
            };

            House h1 = new House
            {
                Id = 1,
                Address = "abc",
                OwnerName = "Foo",
                Cats = new List<Cat>()
            };

            House h2 = new House
            {
                Id = 2,
                Address = "def",
                OwnerName = "Faa",
                Cats = new List<Cat>()
            };

            h1.Cats.Add(cat);
            cat.House = h1;

            Assert.ThrowsException<DontStealMyCatException>(() => service.Move(cat.Id, h2, h1));
        }

        [TestMethod()]
        public void SaPasse()
        {
            using ApplicationDbContext db = new ApplicationDbContext(options);
            CatsService service = new CatsService(db);

            House h1 = new House
            {
                Id = 1,
                Address = "abc",
                OwnerName = "Foo",
                Cats = new List<Cat>()
            };

            House h2 = new House
            {
                Id = 2,
                Address = "def",
                OwnerName = "",
                Cats = new List<Cat>()
            };

            Cat cat = new Cat
            {
                Id=3,
                Age = 1,
                Name = "Fee",
                House = h1,
            };

            db.Cat.Add(cat);
            db.House.Add(h2);
            db.House.Add(h1);
            db.SaveChanges();

            Cat movedCat = service.Move(cat.Id, cat.House, h2);

            Assert.AreEqual(h2, movedCat.House);
        }

        [TestCleanup]
        public void Dispose()
        {
            //TODO on efface les données de tests pour remettre la BD dans son état initial
            using ApplicationDbContext db = new ApplicationDbContext(options);
            db.Cat.RemoveRange(db.Cat);
            db.SaveChanges();
        }
    }
}