using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Composer
{
    public class NuclearWeapon
    {
        public string type { get; set; }
        public string natoName { get; set; }
        public int maxRange { get; set; }
        public string status { get; set; }

        public NuclearWeapon(string type, string natoName, int maxRange, string status)
        {
            this.type = type;
            this.natoName = natoName;
            this.maxRange = maxRange;
            this.status = status;
        }

        public static List<NuclearWeapon> MockData()
        {
            var products = new List<NuclearWeapon>
            {
                new NuclearWeapon("LGM-30 Minuteman III", "Dolphin", 13000, "Operational"),
                new NuclearWeapon("LGM-30F Minuteman II", "Wolderin", 16250, "Decommissioned"),
                new NuclearWeapon("LGM-30 Minuteman I", "Cat Fish", 10186, "Decommissioned"),
                new NuclearWeapon("LGM-118 Peacekeeper", "Bruh Bruh", 14000, "Operational"),
                new NuclearWeapon("Titan II", "Angry Birds", 16000, "Operational"),
                new NuclearWeapon("SM-65 Atlas", "Turtle", 13000, "Decommissioned"),

            };
            return products;
        }
    }
}
