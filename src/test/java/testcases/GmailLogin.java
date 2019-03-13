package testcases;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GmailLogin {
	
	WebDriver driver;
	@Given("^Open Gmail and start application$")
	public void open_Gmail_and_start_application() throws Throwable {
		
System.setProperty("webdriver.chrome.driver", "F:\\Selenium\\chromedriver.exe");  
		
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();	
		
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
		
		//driver.get("https://www.facebook.com");
		driver.navigate().to("https://www.gmail.com");
	}

	@Then("^we will see gmail home page$")
	public void we_will_see_gmail_home_page() throws Throwable {
		
		System.out.println("gmail home page");
	}

}
