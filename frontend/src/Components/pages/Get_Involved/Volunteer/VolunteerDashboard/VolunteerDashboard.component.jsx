import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
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

const dummy = [
  {
    timestamp: "2020-20-11",
    firstName: "John",
    lastName: "Doe",
    isMarried: "No",
    haveChildren: "No",
    role: "Web Designer",
    volunteeredBefore: "Yes",
    contactMethod: "phone",
    email: "test@email.com",
    phone: "(207)200-0000",
    text: "From a friend",
    volunteerId: 22139,
  },
  {
    timestamp: "2020-20-11",
    firstName: "Jane",
    lastName: "Doe",
    isMarried: "Yes",
    haveChildren: "Yes",
    role: "Game Enthusiast",
    volunteeredBefore: "Yes",
    contactMethod: "phone",
    email: "test@email.com",
    phone: "(207)200-0001",
    text: "From a stranger",
    volunteerId: 10998,
  },
];

const VolunteerDashboard = () => {
  const [file, setFile] = useState(dummy);
  const [csvData, setCsvData] = useState([]);

  //   !! Once the backend is sending the right values, uncomment this
  // useEffect(() => {
  //     axios.get("opportunity-hack-vidyodaya.herokuapp.com/volunteers/volunteers")
  //     .then(res => setFile(res.data))
  //     .catch(err => console.log(err))
  // })

  const testData = [
    [
      "timestamp",
      "firstName",
      "lastName",
      "isMarried",
      "hasChildren",
      "role",
      "volunteeredBefore",
      "contactMethod",
      "email",
      "phone",
      "text",
      "volunteerId",
    ],
  ];

  dummy.forEach((obj) => {
    const temp = Object.keys(obj).map((field) => {
      return obj[field];
    });

    testData.push(temp);
  });

  console.log(testData);

  return (
    <Container>
      <HeadingContainer>
        <Heading>Registration Dashboard</Heading>
        <BackBtn>Back</BackBtn>
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
          {file.map((volunteer) => {
            return (
              <TableRows key={volunteer.volunteerId} fieldName={false}>
                {Object.keys(volunteer).map((key) => {
                  if (key !== "volunteerId") {
                    return (
                      <TableData
                        key={
                          volunteer.volunteerId *
                          (Math.random() * volunteer.volunteerId)
                        }
                      >
                        {volunteer[key]}
                      </TableData>
                    );
                  }
                })}
              </TableRows>
            );
          })}
        </Table>
      </TableContainer>
      <LinkContainer>
        <CSVLink data={testData}>Click here to download as CSV File</CSVLink>
      </LinkContainer>
    </Container>
  );
};

export default VolunteerDashboard;
