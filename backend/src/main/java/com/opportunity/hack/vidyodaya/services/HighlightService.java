package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Highlight;
import javax.persistence.EntityNotFoundException;

public interface HighlightService {
  /**
   * Return the highlight with the specified database id
   * @param id The database id requested
   * @return The Highlight instance with the corresponding database id
   * @throws EntityNotFoundException Thrown when no camp with that id exists
   */
  Highlight findHighlightById(long id) throws EntityNotFoundException;
}
