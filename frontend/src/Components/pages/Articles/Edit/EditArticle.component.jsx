import React, { useRef, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
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
} from "../Create/CreateArticle.styles";

import InsertImage from "../../../../Assets/Articles/InsertImage.svg";
import AxiosWithAuth from "../../../../Utils/AxiosWithAuth";

const EditArticle = () => {
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const { articles, addArticles, articleArray, setArticleArray } = useContext(
    AppContext
  );
  // const [file, setFile] = useState();
  const { id } = useParams();
  console.log("articles", articles);
  // hardcode for now
  const years = [];

  const date = new Date();

  for (let i = date.getFullYear(); i >= 1990; i--) {
    years.push(i);
  }

  const goBack = () => {
    history.push("/reports");
  };

  const loadFile = (e) => {
    e.preventDefault();
    let image = document.getElementById("output");
    image.src = URL.createObjectURL(e.target.files[0]);
  };

  useEffect(() => {
    AxiosWithAuth()
      .get(`/articles/article/${id}`)
      .then((res) => {
        console.log("res", res.data);
        addArticles(res.data);
      });
  }, []);

  const onSubmit = (values, e) => {
    e.preventDefault();
    const data = new FormData();
    // TODO file unassigned, purpose?
    // data.append("file", file);
    data.append("upload_preset", `${process.env.REACT_APP_PRESET}`);
    data.append("folder", "files"); // folder name

    // send to cloudinary
    //   axios()
    //     .post(process.env.REACT_APP_URL, data)
    //     .then((res) => {
    //       // mutate original values
    //       const newValues = { ...values, file: res.data.url };
    //       console.log("VALUES -> ", newValues);
    //       reset();
    //     })
    //     .catch((err) => {
    //       console.log(`This is the error: ${err}`);
    //       reset();
    //     });
    // };

    AxiosWithAuth()
      .put(`/articles/article/${id}`, {
        title: articles.title,
        description: articles.description,
        imgUrl: articles.imgUrl,
      })
      .then((res) => {
        setArticleArray([res.data, ...articleArray]);
        console.log("res", res.data);
        history.push(`/articles`);
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
        <Heading>Edit Article</Heading>
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
                  value={articles.imageUrl}
                  style={{
                    paddingTop: "5px",
                    paddingLeft: "15px",
                    opacity: "0",
                  }}
                  onChange={loadFile}
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
                  name="title"
                  value={articles.title}
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

          <AddBtn type="submit">Update</AddBtn>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default EditArticle;
