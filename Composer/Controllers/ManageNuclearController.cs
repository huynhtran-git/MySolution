using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Composer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ManageNuclearController : ControllerBase
    {
        private readonly ILogger<ManageNuclearController> _logger;

        public ManageNuclearController(ILogger<ManageNuclearController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<NuclearWeapon[]> Get()
        {
            return Ok(NuclearWeapon.MockData().ToArray());
        }
    }
}
