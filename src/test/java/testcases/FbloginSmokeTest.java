package testcases;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import creds.Credentials;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbloginSmokeTest {
	
	WebDriver driver;
	@Given("^Open Chrome and start application$")
	public void Open_Chrome_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "F:\\Selenium\\chromedriver.exe");  
		
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();	
		
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
		
		//driver.get("https://www.facebook.com");
		driver.navigate().to("https://www.facebook.com");
		
	}
	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_enter_valid_username_and_password(String username, String password) throws Throwable {
	  
		driver.findElement(By.id("email")).sendKeys(username);
		//driver.findElement(By.id("email")).sendKeys("sru@1234");
		driver.findElement(By.name("pass")).sendKeys(password); 
	}
	@Then("^User will be login to fb successfully$")
	public void User_will_be_login_to_fb_successfully() throws Throwable {

		driver.findElement(By.id("loginbutton")).click();
		
	}
	@When("^User enters Credentials to LogIn$")
	 public void user_enters_testuser_and_Test(List<Credentials>  usercredentials) throws Throwable {
	 
	 //Write the code to handle Data Table
	 for (Credentials credentials : usercredentials) { 
	 driver.findElement(By.id("log")).sendKeys(credentials.getUsername()); 
	     driver.findElement(By.id("pwd")).sendKeys(credentials.getPassword());
	     driver.findElement(By.id("login")).click();
	 } 
	 }

}
