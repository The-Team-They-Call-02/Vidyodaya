package com.opportunity.hack.vidyodaya;

import com.opportunity.hack.vidyodaya.models.Role;
import com.opportunity.hack.vidyodaya.models.User;
import com.opportunity.hack.vidyodaya.models.UserRoles;
import com.opportunity.hack.vidyodaya.services.RoleService;
import com.opportunity.hack.vidyodaya.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * SeedData puts both known and random data into the database. It implements CommandLineRunner.
 * <p>
 * CoomandLineRunner: Spring Boot automatically runs the run method once and only once
 * after the application context has been loaded.
 */
@Transactional
@Component
public class SeedData implements CommandLineRunner {

  /**
   * Connects the Role Service to this process
   */
  @Autowired
  RoleService roleService;

  /**
   * Connects the user service to this process
   */
  @Autowired
  UserService userService;

  /**
   * Generates test, seed data for our application
   * First a set of known data is seeded into our database.
   * Second a random set of data using Java Faker is seeded into our database.
   * Note this process does not remove data from the database. So if data exists in the database
   * prior to running this process, that data remains in the database.
   *
   * @param args The parameter is required by the parent interface but is not used in this process.
   */
  @Transactional
  @Override
  public void run(String[] args) throws Exception {
    roleService.deleteAll();
    Role r1 = new Role("admin");

    r1 = roleService.save(r1);

    // The following is an example user!

    // admin, data, user
    User u1 = new User("admin", "password", "admin@lambdaschool.local");
    u1 = userService.save(u1);
    UserRoles ur1 = new UserRoles(u1, r1);
    u1.getRoles().add(ur1);
    // r1.getUsers().add(u1);

  }
}
