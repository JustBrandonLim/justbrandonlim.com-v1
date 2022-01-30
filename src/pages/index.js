import * as React from "react";

import { graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

//Style
import * as indexStyles from "../styles/pages/index.module.css";

//Custom
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Layout from "../components/layout/Layout";
import ScrollToTopButton from "../components/ScrollToTopButton";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faHackerrank,
  faInstagramSquare,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const queryIndexPage = graphql`
  query indexPage {
    heroImage: file(relativePath: { eq: "BrandonLim.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          height: 800
          width: 800
        )
      }
    }
    firstProject: file(
      relativePath: { eq: "showcase/My-Portfolio-Website.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          height: 400
          width: 800
        )
      }
    }
    secondProject: file(
      relativePath: { eq: "showcase/TimetableGrabber-SIT.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          height: 400
          width: 800
        )
      }
    }
    thirdProject: file(
      relativePath: { eq: "showcase/FastDrivingPractical.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: WEBP
          placeholder: BLURRED
          quality: 100
          height: 400
          width: 800
        )
      }
    }
  }
`;

export default function HomePage({ data }) {
  return (
    <Layout>
      <SearchEngineOptimization title="Portfolio" />
      <Container
        fluid
        className={`py-3 min-vh-100 d-flex justify-content-center ${indexStyles.heroContainer}`}
      >
        <Row className="align-items-center text-center">
          <Col lg={8}>
            <p>
              Hi, I'm Brandon Lim, a student, software and full stack developer.
            </p>
            <h1 className="fw-bold">I love to learn and code.</h1>
            <p>Let's find out more about me.</p>
            <Stack
              direction="horizontal"
              gap={3}
              className={`justify-content-center ${indexStyles.linksWrapper}`}
            >
              <a href="https://github.com/JustBrandonLim/" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-lim-558967119/"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://www.hackerrank.com/2100893_Brandon/"
                aria-label="HackerRank"
              >
                <FontAwesomeIcon icon={faHackerrank} size="2x" />
              </a>
              <a href="https://ko-fi.com/justbrandonlim/" aria-label="Ko-fi">
                <FontAwesomeIcon icon={faMugHot} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/___bljz/"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </a>
            </Stack>
          </Col>
          <Col lg={4}>
            <GatsbyImage
              image={getImage(data.heroImage)}
              className={`shadow-lg ${indexStyles.heroImageWrapper}`}
              imgClassName={`shadow-lg ${indexStyles.heroImage}`}
              alt="Hero Image"
            />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        id="about"
        className={`py-3 ${indexStyles.aboutContainer}`}
      >
        <Row className="text-center">
          <Col lg={true}>
            <h2 className="fw-bold">ABOUT</h2>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <p>
              Having my very first exposure to the world of programming at the
              age of twelve, I have cultivated a strong interest in software
              development and information technology. This interest fueled a
              habit to constantly keep myself up-to-date with the latest
              technologies and advances.
            </p>

            <p>
              Life-long learning is the key to staying relevant in the ever
              changing world of technology.
            </p>

            <p>
              In pursuit of more experience and knowledge, I participated in my
              first Capture-The-Flag (CTF) competition, HTXIC 2021 with my team,
              CGArmy. Subsequently, I won an award for being the first of a few
              teams that successfully solved a drone hacking challenge in the
              shortest amount of time. This small success served as a motivation
              for me to work harder in my craft and delve deeper into the world
              of hacking.
            </p>

            <p>
              Enrolled into Singapore Insititute of Technology (SIT), as a
              student majoring in BE in Information and Communications
              Technology (Software Engineering), I am working as a freelance
              developer to hone my craft, gain more experience and learn on the
              fly during every pocket of time I have apart from studying and
              working on my personal projects.
            </p>

            <p>
              My fervent passion for programming is fueled throughout my years
              of gaming, research and self-educating.
            </p>

            <p>To me, programming is a form of art, similar to literature.</p>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        id="skills"
        className={`py-3 ${indexStyles.skillsContainer}`}
      >
        <Row className="text-center">
          <Col lg={true}>
            <h2 className="fw-bold">SKILLS</h2>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={4}>
            <Card className="mb-3 shadow-lg">
              <Card.Header>Software Developer</Card.Header>
              <Card.Body>
                <p>C</p>
                <p>C++</p>
                <p>C#</p>
                <p>Java</p>
                <p>Python</p>
                <p>Assembly</p>
                <p>Android Debug Bridge</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="mb-3 shadow-lg">
              <Card.Header>Full Stack Developer</Card.Header>
              <Card.Body>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>PHP</p>
                <p>React</p>
                <p>Gatsby</p>
                <p>Next.js</p>
                <p>jQuery</p>
                <p>Bootstrap</p>
                <p>TailwindCSS</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        id="showcase"
        className={`py-3 ${indexStyles.showcaseContainer}`}
      >
        <Row className="text-center">
          <Col lg={true}>
            <h2 className="fw-bold">SHOWCASE</h2>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <Carousel fade variant="dark" className="shadow-lg">
              <Carousel.Item>
                <GatsbyImage
                  image={getImage(data.firstProject)}
                  className="d-block"
                  alt="First Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <GatsbyImage
                  image={getImage(data.secondProject)}
                  className="d-block"
                  alt="Second Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <GatsbyImage
                  image={getImage(data.thirdProject)}
                  className="d-block"
                  alt="Third Slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="pt-3 text-center">
          <Col lg={true}>
            <Button variant="danger" href="/projects" aria-label="View more">
              VIEW MORE
            </Button>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        id="contact"
        className={`py-3 ${indexStyles.contactContainer}`}
      >
        <Row className="text-center">
          <Col lg={true}>
            <h2 className="fw-bold">CONTACT</h2>
          </Col>
        </Row>
        <Row className="text-center">
          <Col lg={true}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="mx-auto" />
            <p>justbrandonlim@gmail.com</p>

            <FontAwesomeIcon icon={faPhone} size="2x" className="mx-auto" />
            <p>(+65) 8692 3241</p>

            <FontAwesomeIcon icon={faDiscord} size="2x" className="mx-auto" />
            <p>BRANDON#7824</p>
          </Col>
        </Row>
      </Container>
      <ScrollToTopButton showBelow={150} />
    </Layout>
  );
}
