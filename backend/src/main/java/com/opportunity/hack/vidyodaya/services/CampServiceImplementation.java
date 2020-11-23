package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Camp;
import com.opportunity.hack.vidyodaya.models.Highlight;
import com.opportunity.hack.vidyodaya.repository.CampRepository;
import com.opportunity.hack.vidyodaya.repository.HighlightRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "campService")
public class CampServiceImplementation implements CampService {

  private final CampRepository campRepository;

  private final HighlightRepository highlightRepository;

  public CampServiceImplementation(
    CampRepository campRepository,
    HighlightRepository highlightRepository
  ) {
    this.campRepository = campRepository;
    this.highlightRepository = highlightRepository;
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
   * @throws EntityNotFoundException Thrown when no camp with that id exists
   */
  @Override
  public Camp findCampById(long id) throws EntityNotFoundException {
    return campRepository
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("\"Camp id \" + id + \" Not Found!")
      );
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
        .orElseThrow(
          () -> new EntityNotFoundException("\"Camp id \" + id + \" Not Found!")
        );
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

    currentCamp.update(updateCamp);

    return campRepository.save(currentCamp);
  }

  /**
   * Delete the Camp instance with the specified database id
   *
   * @param id The database id of the Camp instance to be deleted
   */
  @Override
  public void delete(long id) {
    campRepository
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Camp id " + id + " Not Found!")
      );
    campRepository.deleteById(id);
  }

  /**
   * Add a highlight to a camp
   *
   * @param newHighlight Highlight instance to be added
   * @param campId Database id of Camp instance
   * @return new Highlight instance added
   */
  @Override
  public Highlight addHighlight(Highlight newHighlight, long campId) {
    Camp camp = findCampById(campId);

    newHighlight.setCamp(camp);
    newHighlight = highlightRepository.save(newHighlight);
    camp.getHighlights().add(newHighlight);

    return newHighlight;
  }
}
