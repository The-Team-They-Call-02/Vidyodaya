package com.opportunity.hack.vidyodaya.controllers;

import com.opportunity.hack.vidyodaya.models.Camp;
import com.opportunity.hack.vidyodaya.services.CampService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/camps")
public class CampController {

  private final CampService campService;

  public CampController(CampService campService) {
    this.campService = campService;
  }

  @GetMapping(value = "/", produces = "application/json")
  public ResponseEntity<?> listAllCamps() {
    List<Camp> camps = campService.findAll();

    return new ResponseEntity<>(camps, HttpStatus.OK);
  }

  @GetMapping(value = "/{articleid}", produces = "application/json")
  public ResponseEntity<?> getCampById(@PathVariable long campId) {
    Camp camp = campService.findCampById(campId);

    return new ResponseEntity<>(camp, HttpStatus.OK);
  }
}
