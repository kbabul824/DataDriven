package stepDefinitions;

import org.codehaus.plexus.util.Os;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPage;

public class LoginStepDefinition {

	public WebDriver driver;
	public LoginPage login;
	String url="https://dyn.stg.contido.io/login";
	

	@Given("^User Launches Chrome browser$")
	public void user_Launches_Chrome_browser() throws Throwable {
		if(System.getProperty("os.name").contains("Windows 10")) {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\drivers\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("headless");
		options.addArguments("window-size=1200*600");
		driver = new ChromeDriver();
		
		}else {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//drivers//chromedriver");
			ChromeOptions options = new ChromeOptions();
			options.addArguments("headless");
			options.addArguments("window-size=1200*600");
			driver = new ChromeDriver();
		}
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		driver.get("https://dyn.stg.contido.io/login");
		System.out.println("Url opended");
	}

	// Reg Exp:
	// 1. \"([^\"]*)\"
	// 2. \"(.*)\"

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String password) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(email);
		driver.findElement(By.name("password")).sendKeys(password);
		System.out.println("user name & password entered");
	}

	@When("^user clicks on login$")
	public void user_clicks_on_login() throws Throwable {
		// driver.findElement(By.xpath("(//i[@class='sc-bdVaJa lacgtR'])[2]")).click();
	}

	@Then("^User should not be able to login to application$")
	public void user_should_not_be_able_to_login_to_application() throws Throwable {
		System.out.println("");
	}

	@Then("^User should stay on  login page  only\\.$")
	public void user_should_stay_on_login_page_only() throws Throwable {
		System.out.println("");
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		driver.quit();
	}

}
