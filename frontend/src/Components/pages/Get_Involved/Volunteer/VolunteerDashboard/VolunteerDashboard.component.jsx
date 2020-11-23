import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { useHistory } from "react-router-dom";
import axios from "axios";

// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../../GetInvolved.styles";

import {
  TableContainer,
  Table,
  TableRows,
  TableColumns,
  TableData,
  LinkContainer,
} from "./VolunteerDashboard.styles";

const VolunteerDashboard = () => {
  const [file, setFile] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const history = useHistory();

  // !! Once the backend is sending the right values, uncomment this
  useEffect(() => {
    axios
      .get(
        "https://opportunity-hack-vidyodaya.herokuapp.com/volunteers/volunteers"
      )
      .then((res) => {
        setFile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const csvFile = [];

  file.forEach((obj, i) => {
    if (i === 0) {
      const temp = Object.keys(obj)
        .map((field) => {
          return field;
        })
        .sort();

      csvFile.push(temp);
    }
  });

  const sortedKeys = csvFile[0];

  file.forEach((obj, i) => {
    if (i > 0) {
      const row = sortedKeys.map((key) => {
        return obj[key];
      });

      csvFile.push(row);
    }
  });

  const goBack = () => {
    history.push("/get-involved");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Registration Dashboard</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <TableContainer>
        <Table>
          <TableRows fieldName={true}>
            <TableColumns>Timestamp</TableColumns>
            <TableColumns>First Name</TableColumns>
            <TableColumns>Last Name</TableColumns>
            <TableColumns>Married?</TableColumns>
            <TableColumns>Children?</TableColumns>
            <TableColumns>Role</TableColumns>
            <TableColumns>Volunteered Before?</TableColumns>
            <TableColumns>Contact Method</TableColumns>
            <TableColumns>Email</TableColumns>
            <TableColumns>Phone</TableColumns>
            <TableColumns>How did you hear about us?</TableColumns>
          </TableRows>
          <tbody>
            {file.map((volunteer) => {
              return (
                <TableRows key={volunteer.volunteerId} fieldName={false}>
                  <TableData>{volunteer.timestamp}</TableData>
                  <TableData>{volunteer.firstName}</TableData>
                  <TableData>{volunteer.lastName}</TableData>
                  <TableData>{volunteer.married ? "Yes" : "No"}</TableData>
                  <TableData>{volunteer.haveChildren ? "Yes" : "No"}</TableData>
                  <TableData>{volunteer.role}</TableData>
                  <TableData>
                    {volunteer.volunteeredBefore ? "Yes" : "No"}
                  </TableData>
                  <TableData>{volunteer.contactMethod}</TableData>
                  <TableData>{volunteer.email}</TableData>
                  <TableData>{volunteer.phone}</TableData>
                  <TableData>{volunteer.text}</TableData>
                </TableRows>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
      <LinkContainer>
        <CSVLink data={csvFile}>Click here to download as CSV File</CSVLink>
      </LinkContainer>
    </Container>
  );
};

export default VolunteerDashboard;
