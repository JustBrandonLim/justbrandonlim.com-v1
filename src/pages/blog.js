import * as React from "react";

import { graphql } from "gatsby";

//Style
import * as blogStyles from "../styles/pages/blog.module.css";

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

export const queryBlogPage = graphql`
  query blogPage {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "blog" } } }
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
  const blogPosts = data.allMdx.nodes;

  return (
    <Layout>
      <SearchEngineOptimization title="Blog" />
      <Container
        fluid
        className={`py-3 min-vh-100 ${blogStyles.blogContainer}`}
      >
        <Row className="text-center">
          <Col lg={true}>
            <h1 className="fw-bold">BLOG</h1>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          {blogPosts.map((blog) => (
            <Col lg={4} key={blog.id}>
              <Card className="mb-3 shadow-lg">
                <Card.Body>
                  <Card.Title>{blog.frontmatter.title}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    {blog.frontmatter.date} &bull; {blog.timeToRead} min read
                  </Card.Subtitle>
                  <Card.Text>{blog.excerpt}</Card.Text>
                  <Button
                    variant="dark"
                    href={"/blog/" + blog.frontmatter.slug}
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
