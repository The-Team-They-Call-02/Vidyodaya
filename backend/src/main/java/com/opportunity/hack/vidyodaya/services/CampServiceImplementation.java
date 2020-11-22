package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Camp;
import com.opportunity.hack.vidyodaya.repository.CampRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "campService")
public class CampServiceImplementation implements CampService {

  private final CampRepository campRepository;

  public CampServiceImplementation(CampRepository campRepository) {
    this.campRepository = campRepository;
  }

  /**
   * Return a list of al camps
   *
   * @return List of all Camp instances
   */
  @Override
  public List<Camp> findAll() {
    List<Camp> camps = new ArrayList<>();

    campRepository.findAll().iterator().forEachRemaining(camps::add);
    return camps;
  }
}
