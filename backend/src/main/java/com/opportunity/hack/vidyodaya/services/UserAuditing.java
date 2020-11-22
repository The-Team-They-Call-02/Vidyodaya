package com.opportunity.hack.vidyodaya.services;

import java.util.Optional;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

/**
 * Spring Boot needs to know what username to use for the auditing fields CreatedBy and ModifiedBy
 * Checks to see if there is an authenticated user. If so use that user,
 * if not which happens when seeding the database, use a default value
 */
@Component
public class UserAuditing implements AuditorAware<String> {

  /**
   * The current user
   *
   * @return Optional(String) of current user
   */
  @Override
  public Optional<String> getCurrentAuditor() {
    String uname;
    Authentication authentication = SecurityContextHolder
      .getContext()
      .getAuthentication();
    if (authentication != null) {
      uname = authentication.getName();
    } else {
      uname = "SYSTEM";
    }
    return Optional.of(uname);
  }
}
