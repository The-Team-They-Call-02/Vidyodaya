import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReportPage = (props) => {
  const { id } = useParams();
  const [file, setFile] = useState();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  //   since we're dealing with dummy data, this useEffect won't work yet

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://opportunity-hack-vidyodaya.herokuapp.com/reports/reports/${id}`
  //       )
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  const dummy =
    "http://res.cloudinary.com/mpaolodr/image/upload/v1606014235/files/gmban3rdobkr9sh2ezds.pdf";
  const dlFile = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={dummy} onLoadSuccess={dlFile}>
        <Page pageNumber={pageNumber} />
      </Document>

      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default ReportPage;
