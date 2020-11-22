package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Camp;
import java.util.List;
import javax.persistence.EntityNotFoundException;

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
  Camp findCampById(long id) throws EntityNotFoundException;

  /**
   * Save the provided camp
   * @param camp The camp being saved
   * @return The finalized saved camp
   */
  Camp save(Camp camp);

  /**
   * Update the camp with the specified id using the partial Camp instance
   * provided
   * @param updateCamp A Partial Camp instance with new data
   * @param id The database id of the Camp instance to be updated
   */
  Camp update(Camp updateCamp, long id);
}
