import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosWithAuth from "../../../../Utils/AxiosWithAuth";
import { AppContext } from "../../../../context/context";

// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Articles.styles";

import {
  AlignImage,
  FormContainer,
  Form,
  FileBtn,
  TwoRows,
  Rows,
  InputWrapper,
  InputField,
  TextareaField,
  Label,
  ErrorMsg,
  AddBtn,
  UploadedImage,
} from "./CreateArticle.styles";

import InsertImage from "../../../../Assets/Articles/InsertImage.svg";

const CreateArticle = () => {
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const { articles, addArticles } = useContext(AppContext);

  console.log(articles);
  // TODO never set, is this necessary (see onSubmit below)
  // const [file, setFile] = useState();

  // hardcode for now
  const years = [];

  const date = new Date();

  for (let i = date.getFullYear(); i >= 1990; i--) {
    years.push(i);
  }

  const goBack = () => {
    history.push("/reports");
  };

  // TODO unused, delete?
  // const loadFile = (e) => {
  //   e.preventDefault();
  //   let image = document.getElementById("output");
  //   image.src = URL.createObjectURL(e.target.files[0]);
  // };

  const onSubmit = (values, e) => {
    e.preventDefault();
    const data = new FormData();
    // data.append("file", file);
    data.append("upload_preset", `${process.env.REACT_APP_PRESET}`);
    data.append("folder", "photos"); // folder name

    // send to cloudinary
    // axios()
    //   .post(process.env.REACT_APP_URL, data)
    //   .then((res) => {
    //     // mutate original values
    //     console.log(res.data)
    //     const newValues = { ...values, file: res.data.url };
    //     console.log("VALUES -> ", newValues);
    //     reset();
    //   })
    //   .catch((err) => {
    //     console.log(`This is the error: ${err}`);
    //     reset();
    //   });

    AxiosWithAuth()
      .post("/articles/article", articles)
      .then((res) => {
        // mutate original values
        // console.log("result", articles)
        // const newValues = { ...values, file: res.data.url };
        // console.log("VALUES -> ", newValues);
        // reset();
      })
      .catch((err) => {
        console.log(`This is the error: ${err}`);
        // reset();
      });
  };

  const onChange = (e) => {
    console.log(e.target.value);
    addArticles({ ...articles, [e.target.name]: e.target.value });
  };

  // TODO unused, delete?
  // const handleChange = (e) => {
  //   const { files } = e.target;
  //   const filesList = [];
  //   Array.from(files).forEach((file) => {
  //     filesList.push(file);
  //   });
  //   setFile(filesList[0]);
  // };

  // uploader
  const uploader = useRef();

  return (
    <Container>
      <HeadingContainer>
        <Heading>Add New Article</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AlignImage>
            {/* image */}
            <div>
              <UploadedImage id="output" src={InsertImage} />
              <FileBtn>
                <p
                  style={{
                    position: "absolute",
                    paddingTop: "5px",
                    paddingLeft: "12px",
                  }}
                >
                  Choose File
                </p>
                <input
                  type="file"
                  accept="image/"
                  name="imgUrl"
                  value={articles.imgUrl}
                  style={{
                    paddingTop: "5px",
                    paddingLeft: "15px",
                    opacity: "0",
                  }}
                  onChange={onChange}
                  ref={(ref) => {
                    uploader.current = ref;
                    register({ required: true });
                  }}
                ></input>
              </FileBtn>
            </div>
            <TwoRows>
              {/* title  */}
              <InputWrapper full>
                <Label htmlFor="title">Enter Title</Label>
                <InputField
                  type="text"
                  id="title"
                  value={articles.title}
                  name="title"
                  ref={register({ required: true })}
                  onChange={onChange}
                />
                {errors.title && <ErrorMsg>Please enter a title</ErrorMsg>}
              </InputWrapper>
            </TwoRows>
          </AlignImage>

          {/* description */}
          <Rows>
            <InputWrapper full>
              <Label htmlFor="description">Enter Description</Label>
              <TextareaField
                type="textarea"
                id="description"
                name="description"
                value={articles.description}
                rows="4"
                cols="4"
                ref={register({ required: true })}
                onChange={onChange}
              ></TextareaField>
              {errors.title && <ErrorMsg>Please enter a description</ErrorMsg>}
            </InputWrapper>
          </Rows>

          <AddBtn type="submit">Add</AddBtn>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CreateArticle;
