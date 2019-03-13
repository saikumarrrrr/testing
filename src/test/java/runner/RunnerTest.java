package runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"features"},glue="testcases",monochrome=true,
		format={"html:target/cucumber-html-report","rerun:target/rerun.txt"},
				tags={"~@Functional,@smoke"}
)
public class RunnerTest {
	

}
