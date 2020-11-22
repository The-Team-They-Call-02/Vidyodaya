package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Camp;

import javax.persistence.EntityNotFoundException;
import java.util.List;

public interface CampService {
  /**
   * Return a list of all camps
   * @return List of all Camp instances
   */
  List<Camp> findAll();

  /**
   * Return the camp with the specified database id
   * @param id The database id requested
   * @return The Camp instance with the corresponding database id
   * @throws EntityNotFoundException
   */
  public Camp findCampById(long id) throws EntityNotFoundException;
}
