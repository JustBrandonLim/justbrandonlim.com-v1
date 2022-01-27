import * as React from "react";

import { graphql } from "gatsby";

//Style
import * as ctfsStyles from "../styles/pages/ctfs.module.css";

//Custom
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Layout from "../components/layout/Layout";
import ScrollToTopButton from "../components/ScrollToTopButton";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const queryCaptureTheFlagsPage = graphql`
  query captureTheFlagsPage {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "ctf" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          description
          date(formatString: "MMMM DD, YYYY")
        }
        timeToRead
        id
      }
    }
  }
`;

export default function CaptureTheFlagsPage({ data }) {
  const ctfs = data.allMdx.nodes;

  return (
    <Layout>
      <SearchEngineOptimization title="CTFs" />
      <Container
        fluid
        className={`py-3 min-vh-100 ${ctfsStyles.ctfsContainer}`}
      >
        <Row className="text-center">
          <Col lg={true}>
            <h1 className="fw-bold">CTFS</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          {ctfs.map((ctf) => (
            <Col lg={4} key={ctf.id}>
              <Card className="mb-3 shadow-lg">
                <Card.Body>
                  <Card.Title>{ctf.frontmatter.title}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    {ctf.frontmatter.date} &bull; {ctf.timeToRead} min read
                  </Card.Subtitle>
                  <Card.Text>{ctf.frontmatter.description}</Card.Text>
                  <Button
                    variant="danger"
                    href={"/ctfs/" + ctf.frontmatter.slug}
                    aria-label="View CTF"
                  >
                    VIEW CTF
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col lg={true}></Col>
        </Row>
      </Container>
      <ScrollToTopButton showBelow={150} />
    </Layout>
  );
}
