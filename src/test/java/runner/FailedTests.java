package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@target/rerun.txt",glue="testcases",monochrome=true, 
plugin = {"rerun:target/rerun.txt"}
)
public class FailedTests {

}
