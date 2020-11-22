package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Report;

import java.util.List;

public interface ReportService {
  List<Report> findAll();
  Report findReportById(long id);
  Report save(Report report);
  Report update(Report report, long id);
  void delete(long id);
}
