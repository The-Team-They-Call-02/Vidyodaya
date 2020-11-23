package com.opportunity.hack.vidyodaya.controllers;

import com.opportunity.hack.vidyodaya.models.Feedback;
import com.opportunity.hack.vidyodaya.services.FeedbackService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

  private final FeedbackService feedbackService;

  public FeedbackController(FeedbackService feedbackService) {
    this.feedbackService = feedbackService;
  }

  /**
   * Retrieve a feedback with a specific database id
   * @param id The id of the feedback to retrieve
   * @return HttpStatus.OK
   */
  @GetMapping(value = "/feedback/{id}", produces = "application/json")
  public ResponseEntity<?> getCampById(@PathVariable long id) {
    Feedback feedback = feedbackService.findFeedbackById(id);

    return new ResponseEntity<>(feedback, HttpStatus.OK);
  }

  /**
   * Update the Feedback instance with the specified database id using a partial
   * Camp instance provided.
   * @param updateFeedback The partial Feedback instance with the new data
   * @param id The database id of the Feedback instance to be updated
   * @return HttpStatus.NO_CONTENT
   */
  @PatchMapping(value = "/feedback/{id}", consumes = "application/json")
  public ResponseEntity<?> updateCamp(
    @RequestBody Feedback updateFeedback,
    @PathVariable long id
  ) {
    feedbackService.update(updateFeedback, id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  /**
   * Delete the Feedback instance with the specified database id
   * @param id The database id of the Feedback instance to be deleted
   * @return HttpStatus.NO_CONTENT
   */
  @DeleteMapping(value = "/feedback/{id}")
  public ResponseEntity<?> deleteFeedbackById(@PathVariable long id) {
    feedbackService.delete(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
