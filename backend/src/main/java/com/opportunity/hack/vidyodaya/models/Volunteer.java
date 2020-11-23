package com.opportunity.hack.vidyodaya.models;

import static com.opportunity.hack.vidyodaya.Utility.optionallyReplace;

import javax.persistence.*;

@Entity
@Table(name = "volunteers")
public class Volunteer extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long volunteerId;

  @Column(nullable = false)
  private String firstName;

  @Column(nullable = false)
  private String lastName;

  @Column(nullable = false)
  private String email;

  @Column(nullable = false)
  private String phone;

  @Column(nullable = false)
  private String location;

  @Column(nullable = false)
  private String message;

  @Column(nullable = false)
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

  public void setVolunteerId(long volunteerid) {
    this.volunteerId = volunteerid;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String fname) {
    this.firstName = fname;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lname) {
    this.lastName = lname;
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
