package com.opportunity.hack.vidyodaya.models;

import static com.opportunity.hack.vidyodaya.Utility.optionallyReplace;

import javax.persistence.*;

@Entity
@Table(name = "reports")
public class Report extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long reportId;

  @Column(nullable = false, unique = true)
  private String title;

  private String year;

  private String category;

  @Column(nullable = false, unique = true)
  private String documentUrl;

  public Report() {}

  /**
   * Copy constructor
   * @param source Report being copied
   */
  public Report(Report source) {
    reportId = source.reportId;
    title = source.title;
    year = source.year;
    category = source.category;
    documentUrl = source.documentUrl;
  }

  /**
   * Update this instance with data from a partial Report instance
   * @param source The partial Report instance
   */
  public void update(Report source) {
    title = (String) optionallyReplace(title, source.title);
    year = (String) optionallyReplace(year, source.year);
    category = (String) optionallyReplace(category, source.category);
    documentUrl = (String) optionallyReplace(documentUrl, source.documentUrl);
  }

  public long getReportId() {
    return reportId;
  }

  public void setReportId(long reportid) {
    this.reportId = reportid;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getDocumentUrl() {
    return documentUrl;
  }

  public void setDocumentUrl(String document) {
    this.documentUrl = document;
  }
}
