package com.opportunity.hack.vidyodaya.models;

import static com.opportunity.hack.vidyodaya.Utility.optionallyReplace;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Model for camp table
 */
@Entity
@Table(name = "camps")
public class Camp {

  /**
   * The database id of the camp
   */
  @Id
  @GeneratedValue
  private long campId;

  /**
   * The camp's title
   */
  private String title;

  /**
   * The camp's subtitle
   */
  private String subtitle;

  /**
   * The description of the camp
   */
  @Lob
  private String description;

  /**
   * Number of participants
   */
  @NotNull
  private long participants;

  /**
   * Number of facilitators
   */
  @NotNull
  private long facilitators;

  /**
   * The number of villages covered by the camp
   */
  private long villagesCovered;

  /**
   * The highlights of the camp
   */
  @OneToMany(mappedBy = "camp", cascade = CascadeType.ALL, orphanRemoval = true)
  @JsonIgnoreProperties(value = "camp", allowSetters = true)
  private Set<Highlight> highlights = new HashSet<>();

  /**
   * Feedback given on the camp
   */
  @OneToMany(mappedBy = "camp", cascade = CascadeType.ALL, orphanRemoval = true)
  @JsonIgnoreProperties(value = "camp", allowSetters = true)
  private Set<Feedback> feedback = new HashSet<>();

  public Camp() {}

  /**
   * Copy constructor
   * @param other the Camp instance to be copied
   */
  public Camp(Camp other) {
    this.campId = other.campId;
    this.title = other.title;
    this.subtitle = other.subtitle;
    this.description = other.description;
    this.participants = other.participants;
    this.facilitators = other.facilitators;
    this.villagesCovered = other.villagesCovered;
    this.highlights = other.highlights;
    this.feedback = other.feedback;
  }

  /**
   * Update this Camp instance with fields from a partial Camp instance. Does
   * not update highlights or feedback
   * @param newCamp The partial Camp instance
   */
  public void update(Camp newCamp) {
    title = (String) optionallyReplace(title, newCamp.title);
    subtitle = (String) optionallyReplace(subtitle, newCamp.subtitle);
    description = (String) optionallyReplace(description, newCamp.description);
    participants = optionallyReplace(participants, newCamp.participants);
    facilitators = optionallyReplace(facilitators, newCamp.facilitators);
    villagesCovered =
      optionallyReplace(villagesCovered, newCamp.villagesCovered);
  }

  public long getCampId() {
    return campId;
  }

  public void setCampId(long campId) {
    this.campId = campId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getSubtitle() {
    return subtitle;
  }

  public void setSubtitle(String subtitle) {
    this.subtitle = subtitle;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public long getParticipants() {
    return participants;
  }

  public void setParticipants(long participants) {
    this.participants = participants;
  }

  public long getFacilitators() {
    return facilitators;
  }

  public void setFacilitators(long facilitators) {
    this.facilitators = facilitators;
  }

  public long getVillagesCovered() {
    return villagesCovered;
  }

  public void setVillagesCovered(long villagesCovered) {
    this.villagesCovered = villagesCovered;
  }

  public Set<Highlight> getHighlights() {
    return highlights;
  }

  public void setHighlights(Set<Highlight> highlights) {
    this.highlights = highlights;
  }

  public Set<Feedback> getFeedback() {
    return feedback;
  }

  public void setFeedback(Set<Feedback> feedback) {
    this.feedback = feedback;
  }
}
