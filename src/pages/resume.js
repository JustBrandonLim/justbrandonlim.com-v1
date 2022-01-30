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
    csharpCertificationImage: file(
      relativePath: { eq: "resume/CSharp-Certification-HackerRank.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
    pythonCertificationImage: file(
      relativePath: { eq: "resume/Python-Certification-HackerRank.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
    javaCertificationImage: file(
      relativePath: { eq: "resume/Java-Certification-HackerRank.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
    javaScriptCertificationImage: file(
      relativePath: { eq: "resume/JavaScript-Certification-HackerRank.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
    sqlCertificationImage: file(
      relativePath: { eq: "resume/SQL-Certification-HackerRank.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
    restAPICertificationImage: file(
      relativePath: { eq: "resume/Rest-API-Certification-HackerRank.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          width: 800
        )
      }
    }
    problemSolvingCertificationImage: file(
      relativePath: {
        eq: "resume/Problem-Solving-Certification-HackerRank.png"
      }
    ) {
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
              alt="Brandon Lim's Resume"
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-center text-center">
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
      </Container>
      <Container fluid className={`py-3 ${resumeStyles.resumeContainer}`}>
        <Row className="text-center">
          <Col lg={true}>
            <h2 className="fw-bold">CERTIFICATIONS</h2>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.csharpCertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="C# (Basic) Certification from HackerRank"
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.pythonCertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="Python (Basic) Certification from HackerRank"
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.javaCertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="Java (Basic) Certification from HackerRank"
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.javaScriptCertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="JavaScript (Basic) Certification from HackerRank"
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.sqlCertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="SQL (Basic) Certification from HackerRank"
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.restAPICertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="Rest API (Intermediate) Certification from HackerRank"
            />
          </Col>
        </Row>
        <Row className="pt-3 justify-content-center text-center">
          <Col lg={true}>
            <GatsbyImage
              image={getImage(data.problemSolvingCertificationImage)}
              className={`shadow-lg`}
              imgClassName={`shadow-lg`}
              alt="Problem Solving (Basic) Certification from HackerRank"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTopButton showBelow={150} />
    </Layout>
  );
}
