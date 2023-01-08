using Microsoft.AspNetCore.Mvc;
using Proiect_IS.DataAccess;
using Proiect_IS.Models;
using System.Data;

namespace Proiect_IS.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TravelController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public TravelController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet]
		public JsonResult Get()
		{
			DataTable table = TravelDAO.GetAll();
			return new JsonResult(table);
		}

		[HttpPost]
		public JsonResult Post(Travel travel)
		{
			if (TravelDAO.Insert(travel) == false)
				return new JsonResult("Error ocured while inserting the travel");

			return new JsonResult("Travel placed successfully");
		}
	}
}
