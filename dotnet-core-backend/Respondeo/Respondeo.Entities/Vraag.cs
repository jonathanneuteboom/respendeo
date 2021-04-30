using System.Collections.Generic;

namespace Respondeo.Entities
{
    public class Vraag
    {
        public string Stelling { get; set; }
        public IEnumerable<Antwoord> Antwoorden { get; set; }
        public string Plaatje { get; set; }
    }
}
