package com.opportunity.hack.vidyodaya.models;

import static com.opportunity.hack.vidyodaya.Utility.optionallyReplace;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "volunteers")
public class Volunteer extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long volunteerId;

  @NotNull
  private String firstName;

  @NotNull
  private String lastName;

  private String email;

  private String phone;

  private String location;

  private String message;

  private String position;

  public Volunteer() {}

  /**
   * Copy constructor
   * @param other Volunteer instance to be copied
   */
  public Volunteer(Volunteer other) {
    this.volunteerId = other.volunteerId;
    this.firstName = other.firstName;
    this.lastName = other.lastName;
    this.email = other.email;
    this.phone = other.phone;
    this.location = other.location;
    this.message = other.message;
    this.position = other.position;
  }

  /**
   * Update this instance from a partial Volunteer instance
   * @param source The partial Volunteer instance
   */
  public void update(Volunteer source) {
    firstName = (String) optionallyReplace(firstName, source.firstName);
    lastName = (String) optionallyReplace(lastName, source.lastName);
    email = (String) optionallyReplace(email, source.email);
    phone = (String) optionallyReplace(phone, source.phone);
    location = (String) optionallyReplace(location, source.location);
    message = (String) optionallyReplace(message, source.message);
    position = (String) optionallyReplace(position, source.position);
  }

  public long getVolunteerId() {
    return volunteerId;
  }

  public void setVolunteerId(long volunteerId) {
    this.volunteerId = volunteerId;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getPosition() {
    return position;
  }

  public void setPosition(String position) {
    this.position = position;
  }
}
