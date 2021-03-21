using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace BackOffice
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IIdentityUser" in both code and config file together.
    [ServiceContract]
    public interface IIdentityUser
    {
        [OperationContract]
        User Authentication(IAccount account);
    }

    public class IAccount
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    public class User
    {
        public string fullName { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public string phone { get; set; }

        public User()
        {
            fullName = "Joe Biden";
            email = "biden@gov.us";
            address = "White House";
            phone = "+84 124 536 968";
        }
    }
}
