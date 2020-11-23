package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Volunteer;
import com.opportunity.hack.vidyodaya.repository.VolunteerRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "volunteerService")
public class VolunteerServiceImpl implements VolunteerService {

  @Autowired
  private VolunteerRepository volunteerrepos;

  @Override
  public List<Volunteer> findAll() {
    List<Volunteer> list = new ArrayList<>();
    volunteerrepos.findAll().iterator().forEachRemaining(list::add);
    return list;
  }

  @Override
  public Volunteer findVolunteerById(long id) {
    return volunteerrepos
      .findById(id)
      .orElseThrow(() -> new EntityNotFoundException("Volunteer Id not Found"));
  }

  @Override
  public Volunteer save(Volunteer volunteer) {
    Volunteer newVolunteer = new Volunteer();

    if (volunteer.getVolunteerId() != 0) {
      volunteerrepos
        .findById(volunteer.getVolunteerId())
        .orElseThrow(() -> new EntityNotFoundException("Id invalid"));
      newVolunteer.setVolunteerId(volunteer.getVolunteerId());
    }

    newVolunteer.setFirstName(volunteer.getFirstName());
    newVolunteer.setLastName(volunteer.getLastName());
    newVolunteer.setEmail(volunteer.getEmail());
    newVolunteer.setLocation(volunteer.getLocation());
    newVolunteer.setMessage(volunteer.getMessage());
    newVolunteer.setPhone(volunteer.getPhone());
    newVolunteer.setPosition(volunteer.getPosition());

    return volunteerrepos.save(newVolunteer);
  }

  @Override
  public Volunteer update(Volunteer volunteer, long id) {
    Volunteer currentVolunteer = new Volunteer();

    if (volunteer.getVolunteerId() != 0) {
      volunteerrepos
        .findById(volunteer.getVolunteerId())
        .orElseThrow(() -> new EntityNotFoundException("Id invalid"));
      currentVolunteer.setVolunteerId(volunteer.getVolunteerId());
    }

    if (volunteer.getFirstName() != null) {
      currentVolunteer.setFirstName(volunteer.getFirstName());
    }
    if (volunteer.getLastName() != null) {
      currentVolunteer.setLastName(volunteer.getLastName());
    }
    if (volunteer.getEmail() != null) {
      currentVolunteer.setEmail(volunteer.getEmail());
    }
    if (volunteer.getLocation() != null) {
      currentVolunteer.setLocation(volunteer.getLocation());
    }
    if (volunteer.getMessage() != null) {
      currentVolunteer.setMessage(volunteer.getMessage());
    }
    if (volunteer.getPhone() != null) {
      currentVolunteer.setPhone(volunteer.getPhone());
    }
    if (volunteer.getPosition() != null) {
      currentVolunteer.setPosition(volunteer.getPosition());
    }

    return volunteerrepos.save(currentVolunteer);
  }

  @Override
  public void delete(long id) {
    volunteerrepos
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Volunteer id " + id + " Not Found!")
      );
    volunteerrepos.deleteById(id);
  }
}
