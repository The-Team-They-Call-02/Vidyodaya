package com.opportunity.hack.vidyodaya.controllers;

import com.opportunity.hack.vidyodaya.models.Camp;
import com.opportunity.hack.vidyodaya.services.CampService;
import java.net.URI;
import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/camps")
public class CampController {

  private final CampService campService;

  public CampController(CampService campService) {
    this.campService = campService;
  }

  /**
   * Retrieve a list of all camps
   * @return HttpStatus.OK
   */
  @GetMapping(value = "", produces = "application/json")
  public ResponseEntity<?> listAllCamps() {
    List<Camp> camps = campService.findAll();

    return new ResponseEntity<>(camps, HttpStatus.OK);
  }

  /**
   * Retrieve a camp with a specific database id
   * @param id The id of the camp to retrieve
   * @return HttpStatus.OK
   */
  @GetMapping(value = "/camp/{id}", produces = "application/json")
  public ResponseEntity<?> getCampById(@PathVariable long id) {
    Camp camp = campService.findCampById(id);

    return new ResponseEntity<>(camp, HttpStatus.OK);
  }

  /**
   * Create a new Camp instance
   * @param newCamp JSON representation of Camp fields
   * @return HttpStatus.CREATED
   */
  @PostMapping(value = "/camp", consumes = "application/json")
  public ResponseEntity<?> addNewCamp(@Valid @RequestBody Camp newCamp) {
    newCamp.setCampId(0);
    newCamp = campService.save(newCamp);

    // set the location header for the newly created resource
    HttpHeaders responseHeaders = new HttpHeaders();
    URI newUserURI = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(newCamp.getCampId())
      .toUri();
    responseHeaders.setLocation(newUserURI);

    return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
  }

  /**
   * Update the Camp instance with the specified database id using a partial
   * Camp instance provided.
   * @param updateCamp The partial Camp instance with the new data
   * @param id The database id of the Camp instance to be updated
   * @return HttpStatus.NO_CONTENT
   */
  @PatchMapping(value = "/camp/{id}", consumes = "application/json")
  public ResponseEntity<?> updateCamp(
    @RequestBody Camp updateCamp,
    @PathVariable long id
  ) {
    campService.update(updateCamp, id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  /**
   * Delete the Camp instance with the specified database id
   * @param id The database id of the Camp instance to be deleted
   * @return HttpStatus.NO_CONTENT
   */
  @DeleteMapping(value = "/camp/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable long id) {
    campService.delete(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}
