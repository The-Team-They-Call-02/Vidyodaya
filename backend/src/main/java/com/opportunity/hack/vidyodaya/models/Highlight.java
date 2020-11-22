package com.opportunity.hack.vidyodaya.models;

import static com.opportunity.hack.vidyodaya.Utility.optionallyReplace;

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
  private String title;

  /**
   * The description of the highlight
   */
  @Lob
  private String description;

  /**
   * The URL of the highlight thumbnail
   */
  private String imageUrl;

  /**
   * The camp this is a highlight of
   */
  @ManyToOne
  @JoinColumn(name = "CAMP_ID", nullable = false)
  private Camp camp;

  /**
   * Update this Highlight instance with fields from a partial Highlight
   * instance.
   * @param newHighlight The partial Camp instance
   */
  public void update(Highlight newHighlight) {
    title = (String) optionallyReplace(title, newHighlight.title);
    description =
      (String) optionallyReplace(description, newHighlight.description);
    imageUrl = (String) optionallyReplace(imageUrl, newHighlight.imageUrl);
  }

  public void setHighlightId(long highlightId) {
    this.highlightId = highlightId;
  }

  public long getHighlightId() {
    return highlightId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
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
