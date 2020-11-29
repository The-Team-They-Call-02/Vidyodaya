import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";

// styled
import { ReportPageStyles } from "./ReportPage.styles";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReportPage = (props) => {
  const { id } = useParams();
  const [file, setFile] = useState({
    category: "",
    documentUrl: "",
    reportid: null,
    title: "",
    year: "",
  });

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  //  TODO since we're dealing with dummy data, this useEffect won't work yet

  useEffect(() => {
    axios
      .get(
        `https://opportunity-hack-vidyodaya.herokuapp.com/reports/report/${id}`
      )
      .then((res) => {
        setFile(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const dlFile = ({ numPages }) => {
    setNumPages(numPages);
  };

  const prev = (num) => {
    if (num - 1 >= 1) {
      setPageNumber(num - 1);
    }
  };

  const nxt = (num) => {
    if (num + 1 <= numPages) {
      setPageNumber(num + 1);
    }
  };

  return (
    <div className="MainContainer">
      <ReportPageStyles />

      <Link to={file.documentUrl} className="download-link">
        Download Link
      </Link>

      <h3 className="title">{file.title}</h3>

      <Document
        file={file.documentUrl}
        onLoadSuccess={dlFile}
        className="DocumentContainer"
      >
        <Page pageNumber={pageNumber} style={{ border: "20px solid red" }} />
        <div className="control">
          <button onClick={() => prev(pageNumber)}>Previous</button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onClick={() => nxt(pageNumber)}>Next</button>
        </div>
      </Document>
    </div>
  );
};

export default ReportPage;
