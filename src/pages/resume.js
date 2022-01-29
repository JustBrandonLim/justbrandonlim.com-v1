import * as React from "react";

import { graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

//Style
import * as resumeStyles from "../styles/pages/resume.module.css";

//Custom
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Layout from "../components/layout/Layout";
import ScrollToTopButton from "../components/ScrollToTopButton";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const queryResumePage = graphql`
  query resumePage {
    resumeImage: file(relativePath: { eq: "resume/Resume.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
    csharpCertificationImage: file(relativePath: { eq: "resume/Csharp.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
  }
`;

export default function ResumePage({ data }) {
  return (
    <Layout>
      <SearchEngineOptimization title="Resume" />
      <Container fluid className={`py-3 ${resumeStyles.resumeContainer}`}>
        <Row className="text-center">
          <Col lg={true}>
            <h1 className="fw-bold">RESUME</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.resumeImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="Resume"
            />
          </Col>
        </Row>
        <Row className="py-3 justify-content-center text-center">
          <Col lg={true}>
            <p>
              Download the latest copy of my resume{" "}
              <a href="https://drive.google.com/uc?export=download&id=1b-nXy5hiOnkOrntRP2hJv36WcEVRHcOh">
                here
              </a>
              .
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.csharpCertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="C# Certification"
            />
          </Col>
        </Row>
        <Row className="py-3 justify-content-center text-center">
          <Col lg={true}>
            <p>
              Authenticate the certificate{" "}
              <a href="https://www.hackerrank.com/certificates/bdcb43113470">
                here
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollToTopButton showBelow={150} />
    </Layout>
  );
}
