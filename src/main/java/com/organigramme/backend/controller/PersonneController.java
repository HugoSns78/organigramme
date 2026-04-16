package com.organigramme.backend.controller;

import com.organigramme.backend.model.Personne;
import com.organigramme.backend.repository.PersonneRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/personnes")
public class PersonneController {

    private final PersonneRepository personneRepository;

    public PersonneController(PersonneRepository personneRepository) {
        this.personneRepository = personneRepository;
    }

    @GetMapping
    public List<Personne> getAllPersonne() {
        return personneRepository.findAll();
    }
}
