import * as React from "react";

import { graphql } from "gatsby";

import { MDXRenderer } from "gatsby-plugin-mdx";

//Style
import * as ctfStyles from "../styles/templates/ctf.module.css";

//Custom
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Layout from "../components/layout/Layout";
import ScrollToTopButton from "../components/ScrollToTopButton";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const queryCaptureTheFlagPostPage = graphql`
  query captureTheFlagPostPage($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
      body
    }
  }
`;

export default function CaptureTheFlagPostPage({ data }) {
  const { body, timeToRead } = data.mdx;
  const { title, date, description } = data.mdx.frontmatter;

  return (
    <Layout>
      <SearchEngineOptimization title={title} description={description} />
      <Container fluid className={`py-3 min-vh-100 ${ctfStyles.ctfContainer}`}>
        <Row className="justify-content-center">
          <Col lg={4}>
            <article
              className={ctfStyles.article}
              itemScope
              itemType="http://schema.org/Article"
            >
              <h1 className="fw-bold" itemProp="headline">
                {title}
              </h1>
              <h5 className="text-muted">
                {date} &bull; {timeToRead} min read
              </h5>
              <section className="pt-3" itemProp="articleBody">
                <MDXRenderer>{body}</MDXRenderer>
              </section>
            </article>
          </Col>
        </Row>
      </Container>
      <ScrollToTopButton showBelow={150} />
    </Layout>
  );
}
