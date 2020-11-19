package com.opportunity.hack.models;

import javax.persistence.*;

@Entity
@Table(name= "volunteers")
public class Volunteer extends Auditable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long volunteerid;

    @Column(nullable = false)
    private String fname;

    @Column(nullable = false)
    private String lname;

    @Column(nullable = false)
    private String email;

    public Volunteer() {
    }

    public Volunteer(String fname, String lname, String email) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
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
}
