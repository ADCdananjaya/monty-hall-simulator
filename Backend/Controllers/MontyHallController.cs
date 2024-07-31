using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Backend.Services;

namespace SimulatorAPI.Controllers
{
    [Route("api/")]
    [ApiController]
    public class MontyHallController : ControllerBase
    {
        private readonly MontyHallService _simulatorService;

        public MontyHallController(MontyHallService simulatorService) => _simulatorService = simulatorService;

        [HttpPost("simulator/start")]
        public IActionResult SimulateMontyHallGames([FromBody] SimulationInput simulationInput)
        {
            if (simulationInput == null)
            {
                return BadRequest("Invalid simulation input.");
            }
            var simulationOutput = _simulatorService.GenerateSimulatorOutput(simulationInput);
            return Ok(simulationOutput);
        }


    }
}
