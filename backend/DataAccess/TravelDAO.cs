using MySql.Data.MySqlClient;
using Proiect_IS.Models;
using System.Data;

namespace Proiect_IS.DataAccess
{
	public class TravelDAO
	{

		public static DataTable GetAll()
		{
			MySqlConnection connection = ConnectionFactory.GetConnection();
			connection.Open();

			string statement = "select * from travel";

			MySqlCommand command = new MySqlCommand(statement, connection);
			MySqlDataReader reader = command.ExecuteReader();

			DataTable table = new DataTable();
			table.Load(reader);

			reader.Close();
			connection.Close();

			return table;
		}

		public static bool Insert(Travel travel)
		{
			int success = 1;
			MySqlConnection connection = ConnectionFactory.GetConnection();
			try
			{
				connection.Open();

				string statement = String.Format("insert into travel(traveler,source,destination,cabinClass,date,nrOfAdults,nrOfStudents,nrOfSeniors,nrOfYouths,nrOfChildrens) values('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}')", travel.Traveler, travel.Source, travel.Destination, travel.CabinClass, travel.Date, travel.NrOfAdults, travel.NrOfStudents, travel.NrOfSeniors, travel.NrOfYouths, travel.NrOfChildrens);

				MySqlCommand command = new MySqlCommand(statement, connection);
				success = command.ExecuteNonQuery();

			}
			catch (MySqlException e)
			{
				Console.WriteLine(e.ToString());
			}
			finally
			{
				connection.Close();
			}
			if (success == 1)
				return true;
			Console.WriteLine("Travel was not inserted");
			return false;
		}
	}
}
