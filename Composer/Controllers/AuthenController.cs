using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServiceReference;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Composer.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AuthenController : ControllerBase
    {
        
        [HttpPost]
        public async Task<ActionResult<IdentityServiceReference.User>> Login([FromBody] IAccount loginRequest)
        {
            if (loginRequest == null) return NotFound();
            IdentityUserClient identityUser = new IdentityUserClient();
            IdentityServiceReference.User data = await identityUser.AuthenticationAsync(loginRequest);
            return Ok(data);
        }
    }
}
