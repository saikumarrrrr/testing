package testcases;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Tvshows4mobileDotCom {
	
	WebDriver driver;
@Given("^Open TVshows(\\d+)mobile\\.com and start application$")
public void open_TVshows_mobile_com_and_start_application(int arg1) throws Throwable {
	
System.setProperty("webdriver.chrome.driver", "F:\\Selenium\\chromedriver.exe");  
	
	driver = new ChromeDriver();
	driver.manage().deleteAllCookies();
	driver.manage().window().maximize();	
	
	driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
	
	//driver.get("https://www.facebook.com");
	driver.navigate().to("https://www.tvshows4mobile.com/");
}

@Then("^we will see tvshowsmobile\\.com home page$")
public void we_will_see_tvshowsmobile_com_home_page() throws Throwable {
	
	System.out.println("Tv shows");
}


}
