package com.opportunity.hack.vidyodaya.models;

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
}
