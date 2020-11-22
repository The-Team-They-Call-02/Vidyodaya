package com.opportunity.hack.vidyodaya;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * Main class to start the application.
 */
@EnableJpaAuditing
@SpringBootApplication
public class VidyodayaApplication {

  /**
   * If an application relies on an environment variable, check to make sure
   * that environment variable is available! If the environment variable is not
   * available, you could set a default value, or as is done here, stop
   * execution of the program
   *
   * @param environmentVariable The environmental variable being checked
   */
  private static boolean confirmEnvironmentVariable(
    final String environmentVariable
  ) {
    if (System.getenv(environmentVariable) == null) {
      System.out.printf(
        "Environmental Variable '%s' not found",
        environmentVariable
      );
      return false;
    } else return true;
  }

  /**
   * Main method to start the application.
   *
   * @param args Not used in this application.
   */
  public static void main(final String[] args) {
    // Check to see if the environment variables exists. If they do not, stop execution of application.
    if (
      confirmEnvironmentVariable("OAUTHCLIENTID") &&
      confirmEnvironmentVariable("OAUTHCLIENTSECRET")
    ) SpringApplication.run(VidyodayaApplication.class, args);
  }
}
