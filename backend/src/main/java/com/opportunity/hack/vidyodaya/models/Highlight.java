package com.opportunity.hack.vidyodaya.models;

import javax.persistence.*;

/**
 * Model for camp highlights table
 */
@Entity
@Table(name = "highlights")
public class Highlight {

  /**
   * The database id of the highlight
   */
  @Id
  @GeneratedValue
  private long highlightId;

  /**
   * The title of the highlight
   */
  private String highlight;

  /**
   * The description of the highlight
   */
  @Lob
  private String description;

  /**
   * The URL of the highlight thumbnail
   */
  private String imageUrl;

  @ManyToOne
  @JoinColumn(name = "CAMP_ID", nullable = false)
  private Camp camp;

  public long getHighlightId() {
    return highlightId;
  }

  public void setHighlightId(long highlightId) {
    this.highlightId = highlightId;
  }

  public String getHighlight() {
    return highlight;
  }

  public void setHighlight(String highlight) {
    this.highlight = highlight;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public Camp getCamp() {
    return camp;
  }

  public void setCamp(Camp camp) {
    this.camp = camp;
  }
}
