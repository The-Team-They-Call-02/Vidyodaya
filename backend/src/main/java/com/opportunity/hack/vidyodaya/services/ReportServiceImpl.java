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
public class ReportServiceImpl implements ReportService {

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

    if (report.getReportid() != 0) {
      reportrepos
        .findById(report.getReportid())
        .orElseThrow(() -> new EntityNotFoundException("Report id invalid"));
      newReport.setReportid(report.getReportid());
    }

    newReport.setTitle(report.getTitle());
    newReport.setYear(report.getYear());
    newReport.setCategory(report.getCategory());
    newReport.setDocument(report.getDocument());

    return reportrepos.save(newReport);
  }

  @Override
  public Report update(Report report, long id) {
    Report currentReport = new Report();

    if (report.getReportid() != 0) {
      reportrepos
        .findById(report.getReportid())
        .orElseThrow(() -> new EntityNotFoundException("Report id invalid"));
      currentReport.setReportid(report.getReportid());
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

    if (report.getDocument() != null) {
      currentReport.setDocument(report.getDocument());
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
