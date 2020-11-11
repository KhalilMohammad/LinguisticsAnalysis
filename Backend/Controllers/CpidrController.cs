using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Appium.Windows;

namespace AutomationApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CpidrController : ControllerBase
    {
        private readonly PathConfig _pathConfig;
        private readonly ILogger<CpidrController> _logger;

        public CpidrController(PathConfig pathConfig, ILogger<CpidrController> logger)
        {
            _pathConfig = pathConfig;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get(string text)
        {
            var process = Process.Start(_pathConfig.WinAppDriver);
            if (process == null)
            {
                return StatusCode(500);
            }
            else
            {
                var options = new AppiumOptions();
                options.AddAdditionalCapability("app", _pathConfig.CPIDR);

                var session = new WindowsDriver<WindowsElement>(new Uri("http://127.0.0.1:4723"), options);
                session.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(1.5);
                try
                {
                    session.FindElementByAccessibilityId("textBoxSingleSentenceInput").SendKeys(text);
                    session.FindElementByAccessibilityId("buttonAnalyzeSentence").Click();
                    var textBoxDetails = session.FindElementByAccessibilityId("textBoxDetails");

                    return new JsonResult(textBoxDetails.Text);
                }
                finally
                {
                    if (session != null)
                    {
                        session.Close();

                        session.Quit();
                    }

                    if (process != null)
                        process.WaitForExit();
                }
            }
        }
    }
}
