using MySql.Data.MySqlClient;

namespace Proiect_IS.DataAccess
{
	public sealed class ConnectionFactory
	{
		private static ConnectionFactory _instance = new ConnectionFactory();

		private ConnectionFactory() { }

		private MySqlConnection CreateConnection()
		{
			const string connectionString = "server=localhost;uid=root;pwd=qwert;database=airline";
			return new MySqlConnection(connectionString);
		}


		public static MySqlConnection GetConnection()
		{
			return _instance.CreateConnection();
		}

		public static void CloseConnection(MySqlConnection connection)
		{
			connection.Close();
		}
	}
}
