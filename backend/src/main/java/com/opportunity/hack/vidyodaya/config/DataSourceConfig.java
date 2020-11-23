package com.opportunity.hack.vidyodaya.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSourceConfig {

  @Value("${local.run.db:h2}")
  private String dbValue;

  @Value("${spring.datasource.url:}")
  private String dbURL;

  @SuppressWarnings("SpellCheckingInspection")
  @Bean
  public DataSource dataSource() {
    if (dbValue.equalsIgnoreCase("POSTGRESQL")) {
      HikariConfig config = new HikariConfig();
      config.setDriverClassName("org.postgresql.Driver");
      config.setJdbcUrl(dbURL);
      return new HikariDataSource(config);
    } else {
      String myURLString = "jdbc:h2:mem:testdb";
      String myDriverClass = "org.h2.Driver";
      String myDBUser = "sa";
      String myDBPassword = "";
      return DataSourceBuilder
        .create()
        .username(myDBUser)
        .password(myDBPassword)
        .url(myURLString)
        .driverClassName(myDriverClass)
        .build();
    }
  }
}
