package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Report;
import com.opportunity.hack.vidyodaya.repository.ReportRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "reportService")
public class ReportServiceImplementation implements ReportService {

  @Autowired
  private ReportRepository reportrepos;

  @Override
  public List<Report> findAll() {
    List<Report> list = new ArrayList<>();

    reportrepos.findAll().iterator().forEachRemaining(list::add);
    return list;
  }

  @Override
  public Report findReportById(long id) throws EntityNotFoundException {
    return reportrepos
      .findById(id)
      .orElseThrow(() -> new EntityNotFoundException("Report id not found"));
  }

  @Override
  public Report save(Report report) {
    Report newReport = new Report();

    if (report.getReportId() != 0) {
      reportrepos
        .findById(report.getReportId())
        .orElseThrow(() -> new EntityNotFoundException("Report id invalid"));
      newReport.setReportId(report.getReportId());
    }

    newReport.setTitle(report.getTitle());
    newReport.setYear(report.getYear());
    newReport.setCategory(report.getCategory());
    newReport.setDocumentUrl(report.getDocumentUrl());

    return reportrepos.save(newReport);
  }

  @Override
  public Report update(Report report, long id) {
    Report currentReport = new Report();

    if (report.getReportId() != 0) {
      reportrepos
        .findById(report.getReportId())
        .orElseThrow(() -> new EntityNotFoundException("Report id invalid"));
      currentReport.setReportId(report.getReportId());
    }

    if (report.getTitle() != null) {
      currentReport.setTitle(report.getTitle());
    }

    if (report.getYear() != null) {
      currentReport.setYear(report.getYear());
    }

    if (report.getCategory() != null) {
      currentReport.setCategory(report.getCategory());
    }

    if (report.getDocumentUrl() != null) {
      currentReport.setDocumentUrl(report.getDocumentUrl());
    }

    return reportrepos.save(currentReport);
  }

  @Override
  public void delete(long id) {
    reportrepos
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Report id " + id + " not found!")
      );
    reportrepos.deleteById(id);
  }
}
