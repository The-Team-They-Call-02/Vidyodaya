package com.opportunity.hack.vidyodaya.services;

import static junit.framework.TestCase.assertEquals;

import com.opportunity.hack.vidyodaya.UserModelApplication;
import com.opportunity.hack.vidyodaya.exceptions.ResourceNotFoundException;
import com.opportunity.hack.vidyodaya.models.Role;
import com.opportunity.hack.vidyodaya.models.User;
import com.opportunity.hack.vidyodaya.models.UserRoles;
import org.junit.After;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserModelApplication.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class UserServiceImplTest {

  @Autowired
  private UserService userService;

  @Before
  public void setUp() throws Exception {
    MockitoAnnotations.initMocks(this);
  }

  @After
  public void tearDown() throws Exception {}

  @Test
  public void B_findUserById() {
    assertEquals("admin", userService.findUserById(4).getUsername());
  }

  @Test(expected = ResourceNotFoundException.class)
  public void BA_findUserByIdNotFound() {
    assertEquals("admin", userService.findUserById(10).getUsername());
  }

  @Test
  public void C_findAll() {
    assertEquals(5, userService.findAll().size());
  }

  @Test
  public void D_delete() {
    userService.delete(13);
    assertEquals(4, userService.findAll().size());
  }

  @Test(expected = ResourceNotFoundException.class)
  public void DA_notFoundDelete() {
    userService.delete(100);
    assertEquals(4, userService.findAll().size());
  }

  @Test
  public void E_findByUsername() {
    assertEquals("admin", userService.findByName("admin").getUsername());
  }

  @Test(expected = ResourceNotFoundException.class)
  public void AA_findByUsernameNotfound() {
    assertEquals("admin", userService.findByName("turtle").getUsername());
  }

  @Test
  public void AB_findByNameContaining() {
    assertEquals(4, userService.findByNameContaining("a").size());
  }

  @Test
  public void F_save() {
    Role r2 = new Role("user");
    r2.setRoleid(2);

    User u2 = new User("tiger", "ILuvMath!", "tiger@school.lambda");
    u2.getRoles().add(new UserRoles(u2, r2));

    User saveU2 = userService.save(u2);

    System.out.println("*** DATA ***");
    System.out.println(saveU2);
    System.out.println("*** DATA ***");
  }

  @Transactional
  @WithUserDetails("cinnamon")
  @Test
  public void G_update() {
    Role r2 = new Role("user");
    r2.setRoleid(2);

    User u2 = new User("cinnamon", "password", "cinnamon@school.lambda");
    u2.getRoles().add(new UserRoles(u2, r2));

    User updatedu2 = userService.update(u2, 7);

    System.out.println("*** DATA ***");
    System.out.println(updatedu2);
    System.out.println("*** DATA ***");
  }

  @Transactional
  @WithUserDetails("cinnamon")
  @Test(expected = ResourceNotFoundException.class)
  public void GB_updateNotCurrentUserNorAdmin() {
    Role r2 = new Role("user");
    r2.setRoleid(2);

    User u2 = new User("cinnamon", "password", "cinnamon@school.lambda");
    u2.getRoles().add(new UserRoles(u2, r2));

    User updatedu2 = userService.update(u2, 8);

    System.out.println("*** DATA ***");
    System.out.println(updatedu2);
    System.out.println("*** DATA ***");
  }
}
