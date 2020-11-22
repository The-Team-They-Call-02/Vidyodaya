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

  /**
   * Update the highlight with the specified id using the partial Camp instance
   * provided
   * @param updateHighlight A Partial Camp instance with new data
   * @param id The database id of the Camp instance to be updated
   * @return The updated Highlight instance
   */
  Highlight update(Highlight updateHighlight, long id);

  /**
   * Delete the Highlight instance with the specified database id
   * @param id The database id of the Highlight instance to be deleted
   */
  void delete(long id);
}
