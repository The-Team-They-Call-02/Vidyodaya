package com.opportunity.hack.vidyodaya.controllers;

import com.opportunity.hack.vidyodaya.models.Highlight;
import com.opportunity.hack.vidyodaya.services.HighlightService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/highlights")
public class HighlightController {

  private final HighlightService highlightService;

  public HighlightController(HighlightService highlightService) {
    this.highlightService = highlightService;
  }

  /**
   * Retrieve a camp with a specific database id
   * @param id The id of the camp to retrieve
   * @return HttpStatus.OK
   */
  @GetMapping(value = "/highlight/{id}", produces = "application/json")
  public ResponseEntity<?> getCampById(@PathVariable long id) {
    Highlight highlight = highlightService.findHighlightById(id);

    return new ResponseEntity<>(highlight, HttpStatus.OK);
  }
}
