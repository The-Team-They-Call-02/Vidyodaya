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

  private String contactMethod;

  private String text;

  private String role;

  private Boolean isMarried;

  private Boolean haveChildren;

  private Boolean volunteeredBefore;

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

  public String getContactMethod() {
    return contactMethod;
  }

  public void setContactMethod(String location) {
    this.contactMethod = location;
  }

  public String getText() {
    return text;
  }

  public void setText(String message) {
    this.text = message;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String position) {
    this.role = position;
  }

  public Boolean getMarried() {
    return isMarried;
  }

  public void setMarried(Boolean married) {
    isMarried = married;
  }

  public Boolean getHaveChildren() {
    return haveChildren;
  }

  public void setHaveChildren(Boolean haveChildren) {
    this.haveChildren = haveChildren;
  }

  public Boolean getVolunteeredBefore() {
    return volunteeredBefore;
  }

  public void setVolunteeredBefore(Boolean volunteeredBefore) {
    this.volunteeredBefore = volunteeredBefore;
  }
}
