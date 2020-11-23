import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

//svg file
import svgFile from "../../../../Assets/Reports/upload.svg";

// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Reports.styles";

import {
  FormContainer,
  Form,
  TwoRows,
  Rows,
  InputWrapper,
  InputField,
  Select,
  Label,
  ErrorMsg,
  UploadContainer,
  FileContainer,
  AddBtn,
} from "./AddReport.styles";

const AddReport = () => {
  const history = useHistory();
  const { handleSubmit, register, errors, reset } = useForm();
  const [file, setFile] = useState();

  // hardcode for now
  const years = [];

  const date = new Date();

  for (let i = date.getFullYear(); i >= 1990; i--) {
    years.push(i);
  }

  const goBack = () => {
    history.push("/reports");
  };

  const onSubmit = (values, e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", `${process.env.REACT_APP_PRESET}`);
    data.append("folder", "files"); // folder name

    // send to cloudinary
    axios
      .post(process.env.REACT_APP_URL, data)
      .then((res) => {
        // mutate original values
        const newValues = { ...values, documentUrl: res.data.url };

        axios
          .post(
            "https://opportunity-hack-vidyodaya.herokuapp.com/reports/reports",
            newValues
          )
          .then((res) => {
            reset();
            history.push("/reports");
          })
          .catch((err) => {
            console.log(err);
            reset();
          });
      })
      .catch((err) => {
        console.log(`This is the error: ${err}`);
        reset();
      });
  };

  const handleChange = (e) => {
    const { files } = e.target;

    const filesList = [];

    Array.from(files).forEach((file) => {
      filesList.push(file);
    });

    setFile(filesList[0]);
  };

  // uploader
  const uploader = useRef();

  return (
    <Container>
      <HeadingContainer>
        <Heading>Add Report</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TwoRows>
            {/* category */}
            <InputWrapper category>
              <Label htmlFor="category">Category</Label>
              <Select
                name="category"
                id="category"
                ref={register({ required: true })}
              >
                <option value="" disabled selected>
                  -select-{" "}
                </option>
                <option value="annual"> Annual </option>
                <option value="financial"> Financial </option>
                <option value="other"> Other </option>
              </Select>

              {errors.category && <ErrorMsg>Please select one</ErrorMsg>}
            </InputWrapper>

            {/*year*/}
            <InputWrapper>
              <Label htmlFor="year">Year</Label>
              <Select name="year" id="year" ref={register({ required: true })}>
                <option value="" disabled selected>
                  -select-{" "}
                </option>
                {years.map((year, i) => {
                  return <option key={`${i}${year}${i * year}`}>{year}</option>;
                })}
              </Select>

              {errors.year && <ErrorMsg>Please select one</ErrorMsg>}
            </InputWrapper>
          </TwoRows>
          {/* title  */}
          <Rows>
            <InputWrapper full>
              <Label htmlFor="title">Enter Title</Label>
              <InputField
                type="text"
                id="title"
                name="title"
                ref={register({ required: true })}
              />
              {errors.title && <ErrorMsg>Please enter a title</ErrorMsg>}
            </InputWrapper>
          </Rows>

          {/* file upload */}
          <Rows>
            <InputWrapper full>
              <Label htmlFor="file">Upload Document</Label>
              <InputField
                style={{ display: "none" }}
                type="file"
                id="file"
                name="documentUrl"
                accept=".pdf"
                onChange={handleChange}
                ref={(ref) => {
                  uploader.current = ref;
                  register({ required: true });
                }}
              />

              <UploadContainer
                onClick={() => uploader.current.click()}
                file={file ? true : false}
              >
                {file ? (
                  <FileContainer> {file.name} </FileContainer>
                ) : (
                  <figure>
                    <img src={svgFile} alt="" />
                  </figure>
                )}
              </UploadContainer>

              {errors.title && <ErrorMsg>Please upload your document</ErrorMsg>}
            </InputWrapper>
          </Rows>

          <AddBtn type="submit">Add</AddBtn>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddReport;
