package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Volunteer;

import java.util.List;

public interface VolunteerService {
  List<Volunteer> findAll();
  Volunteer findVolunteerById(long id);
  Volunteer save(Volunteer volunteer);
  Volunteer update(Volunteer volunteer, long id);
  void delete(long id);
}
