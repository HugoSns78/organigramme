package com.organigramme.backend.repository;

import com.organigramme.backend.model.Personne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonneRepository  extends JpaRepository<Personne, Long> {
}
