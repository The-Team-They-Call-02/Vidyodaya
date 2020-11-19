package com.opportunity.hack.controllers;

import com.opportunity.hack.models.Article;
import com.opportunity.hack.models.Volunteer;
import com.opportunity.hack.services.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/volunteers")
public class VolunteerController {

    @Autowired
    private VolunteerService volunteerService;

    @GetMapping(value = "/volunteers",produces = "application/json")
    public ResponseEntity<?> listAllVolunteers(){

        List<Volunteer> volunteers = volunteerService.findAll();
        return new ResponseEntity<>(volunteers, HttpStatus.OK);
    }

    @GetMapping(value = "/volunteer/{volunteerid}",produces = "application" +
            "/json")
    public ResponseEntity<?> findVolunteerById(@PathVariable Long volunteerid){
        Volunteer v = volunteerService.findVolunteerById(volunteerid);
        return new ResponseEntity<>(v,HttpStatus.OK);
    }

    @PostMapping(value = "/volunteer",
            consumes = "application/json")
    public ResponseEntity<?> addNewVolunteer(
            @Valid
            @RequestBody
                    Volunteer newvolunteer) throws
            URISyntaxException
    {
        newvolunteer.setVolunteerid(0);
        newvolunteer = volunteerService.save(newvolunteer);

        // set the location header for the newly created resource
        HttpHeaders responseHeaders = new HttpHeaders();
        URI newUserURI = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{volunteerid}")
                .buildAndExpand(newvolunteer.getVolunteerid())
                .toUri();
        responseHeaders.setLocation(newUserURI);

        return new ResponseEntity<>(null,
                responseHeaders,
                HttpStatus.CREATED);
    }

    @PutMapping(value = "/volunteer/{volunteerid}",
            consumes = "application/json")
    public ResponseEntity<?> updateFullVolunteer(
            @Valid
            @RequestBody
                    Volunteer updateVolunteer,
            @PathVariable
                    long postid)
    {
        updateVolunteer.setVolunteerid(postid);
        volunteerService.save(updateVolunteer);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "/volunteer/{id}",
            consumes = "application/json")
    public ResponseEntity<?> updateVolunteer(
            @RequestBody
                    Volunteer updateVolunteer,
            @PathVariable
                    long id)
    {
        volunteerService.update(updateVolunteer,
                id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/volunteer/{id}")
    public ResponseEntity<?> deleteVolunteerByid(
            @PathVariable
                    long id)
    {
        volunteerService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
