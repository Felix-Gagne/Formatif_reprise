using System;
using question2.Data;
using question2.Exceptions;
using question2.Models;

namespace question2.Services
{
	public class CatsService:BaseService<Cat>
	{
		public CatsService(ApplicationDbContext context) : base(context)
		{
		}

		public Cat? Move(int catId, House from, House to)
		{
			Cat? cat = Get(catId);
			if (cat == null)
				return null;

			//Uniquement un chat avec une maison peut déménager
			if (cat.House == null)
				throw new DontStealMyCatException("On n'apprivoise pas les chats sauvages");

			//On n'a pas fourni la bonne maison d'origine
            if (cat.House.Id != from.Id)
                throw new DontStealMyCatException("Touche pas à mon chat!");

            cat.House = to;
			Update(cat);

            return cat;
        }
	}

    
}

