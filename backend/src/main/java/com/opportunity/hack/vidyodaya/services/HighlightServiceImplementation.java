package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Highlight;
import com.opportunity.hack.vidyodaya.repository.HighlightRepository;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

@Transactional
@Service(value = "highlightService")
public class HighlightServiceImplementation implements HighlightService {

  private final HighlightRepository highlightRepository;

  public HighlightServiceImplementation(
    HighlightRepository highlightRepository
  ) {
    this.highlightRepository = highlightRepository;
  }

  /**
   * Return the highlight with the specified database id
   *
   * @param id The database id requested
   * @return The Highlight instance with the corresponding database id
   * @throws EntityNotFoundException Thrown when no camp with that id exists
   */
  @Override
  public Highlight findHighlightById(long id) throws EntityNotFoundException {
    return highlightRepository
      .findById(id)
      .orElseThrow(
        () ->
          new EntityNotFoundException("\"Highlight id \" + id + \" Not Found!")
      );
  }

  /**
   * Update the highlight with the specified id using the partial Camp instance
   * provided
   * @param updateHighlight A Partial Camp instance with new data
   * @param id The database id of the Camp instance to be updated
   * @return  the updated Highlight instance
   */
  @Override
  public Highlight update(Highlight updateHighlight, long id) {
    Highlight currentHighlight = findHighlightById(id);

    currentHighlight.update(currentHighlight);

    return highlightRepository.save(currentHighlight);
  }
}
