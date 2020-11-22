package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Article;
import com.opportunity.hack.vidyodaya.models.Camp;
import com.opportunity.hack.vidyodaya.repository.CampRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
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

  /**
   * Save the provided camp
   *
   * @param camp The camp being saved
   * @return The finalized saved camp
   */
  @Override
  public Camp save(Camp camp) {
    Camp newCamp = new Camp(camp);

    if (camp.getCampId() != 0) {
      campRepository
        .findById(camp.getCampId())
        .orElseThrow(() -> new EntityNotFoundException("Post id invalid"));
      newCamp.setCampId(camp.getCampId());
    }

    return campRepository.save(newCamp);
  }

  /**
   * Update the camp with the specified id using the partial Camp instance
   * provided
   *
   * @param updateCamp A Partial Camp instance with new data
   * @param id         The database id of the Camp instance to be updated
   */
  @Override
  public Camp update(Camp updateCamp, long id) {
    Camp currentCamp = findCampById(id);

    currentCamp.update(currentCamp);

    return campRepository.save(currentCamp);
  }
}
