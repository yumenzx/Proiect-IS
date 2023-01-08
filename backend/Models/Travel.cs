namespace Proiect_IS.Models
{
	public class Travel
	{
		public string Traveler { get; set; } = default!;
		public string Source { get; set; } = default!;
		public string Destination { get; set; } = default!;
		public string CabinClass { get; set; } = default!;
		public string Date { get; set; } = default!;
		public int NrOfAdults { get; set; }
		public int NrOfStudents { get; set; }
		public int NrOfSeniors { get; set; }
		public int NrOfYouths { get; set; }
		public int NrOfChildrens { get; set; }
	}
}
