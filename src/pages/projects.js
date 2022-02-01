import * as React from "react";

import { graphql } from "gatsby";

//Style
import * as projectsStyles from "../styles/pages/projects.module.css";

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

export const queryProjectsPage = graphql`
  query projectsPage {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "project" } } }
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
        excerpt
      }
    }
  }
`;

export default function ProjectsPage({ data }) {
  const projects = data.allMdx.nodes;

  return (
    <Layout>
      <SearchEngineOptimization title="Projects" />
      <Container
        fluid
        className={`py-3 min-vh-100 ${projectsStyles.projectsContainer}`}
      >
        <Row className="text-center">
          <Col lg={true}>
            <h1 className="fw-bold">PROJECTS</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          {projects.map((project) => (
            <Col lg={4} key={project.id}>
              <Card className="mb-3 shadow-lg">
                <Card.Body>
                  <Card.Title>{project.frontmatter.title}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    {project.frontmatter.date} &bull; {project.timeToRead} min
                    read
                  </Card.Subtitle>
                  <Card.Text>{project.excerpt}</Card.Text>
                  <Button
                    variant="dark"
                    href={"/projects/" + project.frontmatter.slug}
                    aria-label="Read more"
                  >
                    READ MORE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ScrollToTopButton showBelow={150} />
    </Layout>
  );
}
