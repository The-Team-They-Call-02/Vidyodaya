package com.opportunity.hack.vidyodaya.services;

import com.opportunity.hack.vidyodaya.models.Report;
import com.opportunity.hack.vidyodaya.repository.ReportRepository;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service(value = "reportService")
public class ReportServiceImplementation implements ReportService {

  private final ReportRepository reportRepository;

  public ReportServiceImplementation(ReportRepository reportRepository) {
    this.reportRepository = reportRepository;
  }

  @Override
  public List<Report> findAll() {
    List<Report> list = new ArrayList<>();

    reportRepository.findAll().iterator().forEachRemaining(list::add);
    return list;
  }

  @Override
  public Report findReportById(long id) throws EntityNotFoundException {
    return reportRepository
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Report id " + id + " not found")
      );
  }

  @Override
  public Report save(Report report) {
    Report newReport = new Report(report);

    // if report has an id, make sure it actually exists
    if (report.getReportId() != 0) {
      reportRepository
        .findById(report.getReportId())
        .orElseThrow(
          () ->
            new EntityNotFoundException("\"Report id \" + id + \" not found\"")
        );
    }

    return reportRepository.save(newReport);
  }

  @Override
  public Report update(Report report, long id) {
    Report currentReport = findReportById(id);

    currentReport.update(report);

    return reportRepository.save(currentReport);
  }

  @Override
  public void delete(long id) {
    reportRepository
      .findById(id)
      .orElseThrow(
        () -> new EntityNotFoundException("Report id " + id + " not found!")
      );
    reportRepository.deleteById(id);
  }
}
