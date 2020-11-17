package com.lambdaschool.oktafoundation.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "fundraisers")
public class Fundraiser
{
    @Id
    @GeneratedValue
    private long fundraiserid;


    private String title;
    private String description;

    @NotNull
    private double donationgoal;

    @NotNull
    private String img;

    public Fundraiser()
    {
    }


    public long getFundraiserid()
    {
        return fundraiserid;
    }

    public void setFundraiserid(long fundraiserid)
    {
        this.fundraiserid = fundraiserid;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public double getDonationgoal()
    {
        return donationgoal;
    }

    public void setDonationgoal(double donationgoal)
    {
        this.donationgoal = donationgoal;
    }

    public String getImg()
    {
        return img;
    }

    public void setImg(String img)
    {
        this.img = img;
    }
}
