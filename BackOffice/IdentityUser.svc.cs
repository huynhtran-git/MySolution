using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace BackOffice
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "IdentityUser" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select IdentityUser.svc or IdentityUser.svc.cs at the Solution Explorer and start debugging.
    public class IdentityUser : IIdentityUser
    {
        public User Authentication(IAccount account)
        {
            return (account.username == "admin" && account.password == "password") ? new User() : null;
        }
    }
}
