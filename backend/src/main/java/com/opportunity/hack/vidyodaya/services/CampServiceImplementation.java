package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Camp;
import com.opportunity.hack.vidyodaya.repository.CampRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;

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

  /**
   * Return the camp with the specified database id
   *
   * @param id The database id requested
   * @return The Camp instance with the corresponding database id
   * @throws EntityNotFoundException
   */
  @Override
  public Camp findCampById(long id) throws EntityNotFoundException {
    return campRepository
            .findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Article id not found"));
  }
}
