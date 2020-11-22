package com.opportunity.hack.models;

import javax.persistence.*;

@Entity
@Table(name = "volunteers")
public class Volunteer extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long volunteerid;

  @Column(nullable = false)
  private String fname;

  @Column(nullable = false)
  private String lname;

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
    String fname,
    String lname,
    String email,
    String phone,
    String location,
    String message,
    String position
  ) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.location = location;
    this.message = message;
    this.position = position;
  }

  public long getVolunteerid() {
    return volunteerid;
  }

  public void setVolunteerid(long volunteerid) {
    this.volunteerid = volunteerid;
  }

  public String getFname() {
    return fname;
  }

  public void setFname(String fname) {
    this.fname = fname;
  }

  public String getLname() {
    return lname;
  }

  public void setLname(String lname) {
    this.lname = lname;
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
