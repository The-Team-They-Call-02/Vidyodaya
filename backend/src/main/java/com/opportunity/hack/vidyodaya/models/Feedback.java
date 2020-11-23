package com.opportunity.hack.vidyodaya.models;

import static com.opportunity.hack.vidyodaya.Utility.optionallyReplace;

import javax.persistence.*;

/**
 * Model for camp feedback item table
 */
@Entity
@Table(name = "feedback")
public class Feedback {

  /**
   * The database id of the feedback item
   */
  @Id
  @GeneratedValue
  private long feedbackId;

  /**
   * The testimonial text of the feedback item
   */
  @Lob
  private String testimonial;

  /**
   * The source of the feedback item
   */
  private String source;

  /**
   * The camp this feedback item is about
   */
  @ManyToOne
  @JoinColumn(name = "CAMP_ID", nullable = false)
  private Camp camp;

  /**
   * Update this Highlight instance with fields from a partial Highlight
   * instance.
   * @param newFeedback The partial Camp instance
   */
  public void update(Feedback newFeedback) {
    testimonial =
      (String) optionallyReplace(testimonial, newFeedback.testimonial);
    source = (String) optionallyReplace(source, newFeedback.source);
  }

  public long getFeedbackId() {
    return feedbackId;
  }

  public void setFeedbackId(long feedbackId) {
    this.feedbackId = feedbackId;
  }

  public String getTestimonial() {
    return testimonial;
  }

  @Lob
  public void setTestimonial(String testimonial) {
    this.testimonial = testimonial;
  }

  public String getSource() {
    return source;
  }

  public void setSource(String source) {
    this.source = source;
  }

  public Camp getCamp() {
    return camp;
  }

  public void setCamp(Camp camp) {
    this.camp = camp;
  }
}
