using MySql.Data.MySqlClient;
using MySqlX.XDevAPI;
using Proiect_IS.Models;
using System.Data;
using System.Reflection.PortableExecutable;

namespace Proiect_IS.DataAccess
{
	public class UserDAO
	{
		public static DataTable GetAll()
		{
			MySqlConnection connection = ConnectionFactory.GetConnection();
			connection.Open();

			string statement = "select * from user";

			MySqlCommand command= new MySqlCommand(statement, connection);
			MySqlDataReader reader = command.ExecuteReader();

			DataTable table = new DataTable();
			table.Load(reader);

			reader.Close();
			connection.Close();

			return table;
		}

		public static bool Insert(User user)
		{
			int success = 0;
			MySqlConnection connection = ConnectionFactory.GetConnection();
			try
			{
				connection.Open();

				string statement = String.Format("insert into user(firstName,lastName,contactNumber,email,password,role) values('{0}','{1}','{2}','{3}','{4}','{5}')", user.FirstName, user.LastName, user.ContactNumber, user.Email, user.Password,user.Role);

				MySqlCommand command = new MySqlCommand(statement, connection);
				success = command.ExecuteNonQuery();

			}catch(MySqlException e)
			{
				Console.WriteLine(e.ToString());
			}
			finally
			{
				connection.Close();
			}

			if (success == 1)
				return true;
			Console.WriteLine("Client was inserted with error code ");
			return false;
		}

		public static bool VerifyExistency(string email) {
			MySqlConnection connection = ConnectionFactory.GetConnection();

			bool exists = false;
			try
			{
				connection.Open();
				string statement = String.Format("select * from user where email='{0}'", email);

				MySqlCommand command = new MySqlCommand(statement, connection);
				MySqlDataReader reader = command.ExecuteReader();

				exists = reader.Read();
				reader.Close();
			}
			catch (MySqlException e)
			{
				Console.WriteLine(e.ToString());
			}
			finally
			{
				connection.Close();
			}

			return exists;
		}

		public static string VerifyExistency(string email, string password)
		{
			MySqlConnection connection = ConnectionFactory.GetConnection();
			string userType = "";

			try
			{
				connection.Open();

				string statement = String.Format("select * from user where email='{0}' and password='{1}'", email, password);

				MySqlCommand command = new MySqlCommand(statement, connection);
				MySqlDataReader reader = command.ExecuteReader();

				if (reader.Read())
					userType = reader.GetString("role");

				reader.Close();
			}
			catch(MySqlException e)
			{
				Console.WriteLine(e.ToString());
			}
			finally
			{
				connection.Close();
			}

			return userType;
		}
	}
}
