package com.opportunity.hack.models;


import javax.persistence.*;

@Entity
@Table(name= "reports")
public class Report extends Auditable
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long reportid;

    @Column(nullable = false,unique = true)
    private String title;

    private String year;
    private String category;

    @Column(nullable = false,unique = true)
    private String document;

    public Report()
    {
    }

    public Report(
        String title,
        String year,
        String category,
        String document)
    {
        this.title = title;
        this.year = year;
        this.category = category;
        this.document = document;
    }

    public long getReportid()
    {
        return reportid;
    }

    public void setReportid(long reportid)
    {
        this.reportid = reportid;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getYear()
    {
        return year;
    }

    public void setYear(String year)
    {
        this.year = year;
    }

    public String getCategory()
    {
        return category;
    }

    public void setCategory(String category)
    {
        this.category = category;
    }

    public String getDocument()
    {
        return document;
    }

    public void setDocument(String document)
    {
        this.document = document;
    }
}
