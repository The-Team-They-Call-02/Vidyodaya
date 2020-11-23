package com.opportunity.hack.vidyodaya.controllers;

import com.opportunity.hack.vidyodaya.models.Volunteer;
import com.opportunity.hack.vidyodaya.services.VolunteerService;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/volunteers")
public class VolunteerController {

  @Autowired
  private VolunteerService volunteerService;

  @GetMapping(value = "/volunteers", produces = "application/json")
  public ResponseEntity<?> listAllVolunteers() {
    List<Volunteer> volunteers = volunteerService.findAll();
    return new ResponseEntity<>(volunteers, HttpStatus.OK);
  }

  @GetMapping(value = "/volunteer/{id}", produces = "application" + "/json")
  public ResponseEntity<?> findVolunteerById(@PathVariable Long id) {
    Volunteer v = volunteerService.findVolunteerById(id);
    return new ResponseEntity<>(v, HttpStatus.OK);
  }

  @PostMapping(value = "/volunteer", consumes = "application/json")
  public ResponseEntity<?> addNewVolunteer(
    @Valid @RequestBody Volunteer newVolunteer
  )
    throws URISyntaxException {
    newVolunteer.setVolunteerId(0);
    newVolunteer = volunteerService.save(newVolunteer);

    // set the location header for the newly created resource
    HttpHeaders responseHeaders = new HttpHeaders();
    URI newUserURI = ServletUriComponentsBuilder
      .fromCurrentRequest()
      .path("/{id}")
      .buildAndExpand(newVolunteer.getVolunteerId())
      .toUri();
    responseHeaders.setLocation(newUserURI);

    return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
  }

  @PatchMapping(value = "/volunteer/{id}", consumes = "application/json")
  public ResponseEntity<?> updateVolunteer(
    @RequestBody Volunteer updateVolunteer,
    @PathVariable long id
  ) {
    volunteerService.update(updateVolunteer, id);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @DeleteMapping(value = "/volunteer/{id}")
  public ResponseEntity<?> deleteVolunteerById(@PathVariable long id) {
    volunteerService.delete(id);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
