using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using question2.Models;

namespace question2.Data;

public class ApplicationDbContext : IdentityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
    public DbSet<question2.Models.Cat> Cat { get; set; } = default!;
    public DbSet<question2.Models.House> House { get; set; } = default!;
}

