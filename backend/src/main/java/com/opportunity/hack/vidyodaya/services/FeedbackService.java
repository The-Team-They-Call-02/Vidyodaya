package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Feedback;
import javax.persistence.EntityNotFoundException;

public interface FeedbackService {
  /**
   * Return the highlight with the specified database id
   * @param id The database id requested
   * @return The Highlight instance with the corresponding database id
   * @throws EntityNotFoundException Thrown when no camp with that id exists
   */
  Feedback findFeedbackById(long id) throws EntityNotFoundException;

  /**
   * Update the highlight with the specified id using the partial Camp instance
   * provided
   * @param updateFeedback A Partial Camp instance with new data
   * @param id The database id of the Camp instance to be updated
   * @return The updated Highlight instance
   */
  Feedback update(Feedback updateFeedback, long id);

  /**
   * Delete the Highlight instance with the specified database id
   * @param id The database id of the Highlight instance to be deleted
   */
  void delete(long id);
}
