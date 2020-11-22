package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Camp;
import java.util.List;

public interface CampService {
  /**
   * Return a list of al camps
   * @return List of all Camp instances
   */
  List<Camp> findAll();
}
