using Microsoft.AspNetCore.Mvc;
using Proiect_IS.DataAccess;
using Proiect_IS.Models;
using System.Data;

namespace Proiect_IS.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public UserController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public JsonResult Get()
		{
			DataTable table = UserDAO.GetAll();
			return new JsonResult(table);
		}

		[HttpPost]
		public JsonResult Post(User user) {

			if (UserDAO.VerifyExistency(user.Email))
			{
				return new JsonResult("User with given email address already exists");
			}

			if (UserDAO.Insert(user) == false)
				return new JsonResult("Error ocured while inserting user");

			return new JsonResult("Registred successfully");
		}

		[HttpGet("{email}/{password}")]
		public JsonResult Get(string email, string password)
		{
			string userType = UserDAO.VerifyExistency(email,password);

			if (userType.Equals(""))
				return new JsonResult("FAIL");
			return new JsonResult("SUCCESS-" + userType);
		}
	}
}
