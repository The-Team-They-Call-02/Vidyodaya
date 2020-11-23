package com.opportunity.hack.vidyodaya.models;

import static com.opportunity.hack.vidyodaya.Utility.optionallyReplace;

import java.sql.Date;
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

  private String contactMethod;

  private String text;

  private String role;

  private Boolean isMarried;

  private Boolean haveChildren;

  private Boolean volunteeredBefore;

  protected Date timestamp;

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
    this.contactMethod = other.contactMethod;
    this.text = other.text;
    this.role = other.role;
    this.isMarried = other.isMarried;
    this.haveChildren = other.haveChildren;
    this.volunteeredBefore = other.volunteeredBefore;
    this.timestamp = other.timestamp;
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
    contactMethod =
      (String) optionallyReplace(contactMethod, source.contactMethod);
    text = (String) optionallyReplace(text, source.text);
    role = (String) optionallyReplace(role, source.role);
    isMarried = (Boolean) optionallyReplace(isMarried, source.isMarried);
    haveChildren =
      (Boolean) optionallyReplace(haveChildren, source.haveChildren);
    volunteeredBefore =
      (Boolean) optionallyReplace(volunteeredBefore, source.volunteeredBefore);
    timestamp = (Date) optionallyReplace(timestamp, source.timestamp);
  }

  public long getVolunteerId() {
    return volunteerId;
  }

  public void setVolunteerId(long volunteerId) {
    this.volunteerId = volunteerId;
  }

  @SuppressWarnings("unused")
  public String getFirstName() {
    return firstName;
  }

  @SuppressWarnings("unused")
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  @SuppressWarnings("unused")
  public String getLastName() {
    return lastName;
  }

  @SuppressWarnings("unused")
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  @SuppressWarnings("unused")
  public String getEmail() {
    return email;
  }

  @SuppressWarnings("unused")
  public void setEmail(String email) {
    this.email = email;
  }

  @SuppressWarnings("unused")
  public String getPhone() {
    return phone;
  }

  @SuppressWarnings("unused")
  public void setPhone(String phone) {
    this.phone = phone;
  }

  @SuppressWarnings("unused")
  public String getContactMethod() {
    return contactMethod;
  }

  @SuppressWarnings("unused")
  public void setContactMethod(String location) {
    this.contactMethod = location;
  }

  @SuppressWarnings("unused")
  public String getText() {
    return text;
  }

  @SuppressWarnings("unused")
  public void setText(String message) {
    this.text = message;
  }

  @SuppressWarnings("unused")
  public String getRole() {
    return role;
  }

  @SuppressWarnings("unused")
  public void setRole(String position) {
    this.role = position;
  }

  @SuppressWarnings("unused")
  public Boolean getMarried() {
    return isMarried;
  }

  @SuppressWarnings("unused")
  public void setMarried(Boolean married) {
    isMarried = married;
  }

  @SuppressWarnings("unused")
  public Boolean getHaveChildren() {
    return haveChildren;
  }

  @SuppressWarnings("unused")
  public void setHaveChildren(Boolean haveChildren) {
    this.haveChildren = haveChildren;
  }

  @SuppressWarnings("unused")
  public Boolean getVolunteeredBefore() {
    return volunteeredBefore;
  }

  @SuppressWarnings("unused")
  public void setVolunteeredBefore(Boolean volunteeredBefore) {
    this.volunteeredBefore = volunteeredBefore;
  }

  @SuppressWarnings("unused")
  public Date getTimestamp() {
    return timestamp;
  }

  @SuppressWarnings("unused")
  public void setTimestamp(Date timestamp) {
    this.timestamp = timestamp;
  }
}
