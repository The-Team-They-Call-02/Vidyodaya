package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Feedback;
import com.opportunity.hack.vidyodaya.repository.FeedbackRepository;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;

@Transactional
@Service(value = "feedbackService")
public class FeedbackServiceImplementation implements FeedbackService {

  private final FeedbackRepository feedbackRepository;

  public FeedbackServiceImplementation(FeedbackRepository feedbackRepository) {
    this.feedbackRepository = feedbackRepository;
  }

  /**
   * Return the highlight with the specified database id
   *
   * @param id The database id requested
   * @return The Highlight instance with the corresponding database id
   * @throws EntityNotFoundException Thrown when no camp with that id exists
   */
  @Override
  public Feedback findFeedbackById(long id) throws EntityNotFoundException {
    return feedbackRepository
      .findById(id)
      .orElseThrow(
        () ->
          new EntityNotFoundException("\"Highlight id \" + id + \" Not Found!")
      );
  }

  /**
   * Update the highlight with the specified id using the partial Camp instance
   * provided
   * @param updateFeedback A Partial Camp instance with new data
   * @param id The database id of the Camp instance to be updated
   * @return  the updated Highlight instance
   */
  @Override
  public Feedback update(Feedback updateFeedback, long id) {
    Feedback currentFeedback = findFeedbackById(id);

    currentFeedback.update(updateFeedback);

    return feedbackRepository.save(currentFeedback);
  }

  /**
   * Delete the Highlight instance with the specified database id
   *
   * @param id The database id of the Highlight instance to be deleted
   */
  @Override
  public void delete(long id) {
    feedbackRepository
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Highlight id " + id + " Not Found!")
      );
    feedbackRepository.deleteById(id);
  }
}
