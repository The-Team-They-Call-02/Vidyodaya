package com.opportunity.hack.vidyodaya.controllers;

import com.opportunity.hack.vidyodaya.models.Highlight;
import com.opportunity.hack.vidyodaya.services.HighlightService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/highlights")
public class HighlightController {

  private final HighlightService highlightService;

  public HighlightController(HighlightService highlightService) {
    this.highlightService = highlightService;
  }

  /**
   * Retrieve a highlight with a specific database id
   * @param id The id of the highlight to retrieve
   * @return HttpStatus.OK
   */
  @GetMapping(value = "/highlight/{id}", produces = "application/json")
  public ResponseEntity<?> getHighlightById(@PathVariable long id) {
    Highlight highlight = highlightService.findHighlightById(id);

    return new ResponseEntity<>(highlight, HttpStatus.OK);
  }

  /**
   * Update the Highlight instance with the specified database id using a partial
   * Highlight instance provided.
   * @param updateHighlight The partial Highlight instance with the new data
   * @param id The database id of the Highlight instance to be updated
   * @return HttpStatus.NO_CONTENT
   */
  @PatchMapping(value = "/highlight/{id}", consumes = "application/json")
  public ResponseEntity<?> updateHighlight(
    @RequestBody Highlight updateHighlight,
    @PathVariable long id
  ) {
    highlightService.update(updateHighlight, id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  /**
   * Delete the Highlight instance with the specified database id
   * @param id The database id of the Highlight instance to be deleted
   * @return HttpStatus.NO_CONTENT
   */
  @DeleteMapping(value = "/highlight/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable long id) {
    highlightService.delete(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
