package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Volunteer;
import com.opportunity.hack.vidyodaya.repository.VolunteerRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "volunteerService")
public class VolunteerServiceImplementation implements VolunteerService {

  private final VolunteerRepository volunteerRepository;

  public VolunteerServiceImplementation(
    VolunteerRepository volunteerRepository
  ) {
    this.volunteerRepository = volunteerRepository;
  }

  @Override
  public List<Volunteer> findAll() {
    List<Volunteer> list = new ArrayList<>();
    volunteerRepository.findAll().iterator().forEachRemaining(list::add);
    return list;
  }

  @Override
  public Volunteer findVolunteerById(long id) {
    return volunteerRepository
      .findById(id)
      .orElseThrow(() -> new EntityNotFoundException("Volunteer Id not Found"));
  }

  @Override
  public Volunteer save(Volunteer volunteer) {
    Volunteer newVolunteer = new Volunteer(volunteer);

    if (volunteer.getVolunteerId() != 0) {
      volunteerRepository
        .findById(volunteer.getVolunteerId())
        .orElseThrow(() -> new EntityNotFoundException("Id invalid"));
    }

    return volunteerRepository.save(newVolunteer);
  }

  @Override
  public Volunteer update(Volunteer updateVolunteer, long id) {
    Volunteer currentVolunteer = findVolunteerById(id);

    currentVolunteer.update(updateVolunteer);

    return volunteerRepository.save(currentVolunteer);
  }

  @Override
  public void delete(long id) {
    volunteerRepository
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Volunteer id " + id + " Not Found!")
      );
    volunteerRepository.deleteById(id);
  }
}
