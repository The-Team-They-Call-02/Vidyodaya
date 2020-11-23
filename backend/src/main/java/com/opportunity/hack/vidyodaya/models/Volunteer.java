package com.opportunity.hack.vidyodaya.models;

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

  public Volunteer(
    String firstName,
    String lastName,
    String email,
    String phone,
    String location,
    String message,
    String position
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.message = message;
    this.position = position;
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
