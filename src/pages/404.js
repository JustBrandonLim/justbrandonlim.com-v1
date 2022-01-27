import * as React from "react";

//Style
import * as notFoundStyles from "../styles/pages/404.module.css";

//Custom
import SearchEngineOptimization from "../components/SearchEngineOptimization";
import Layout from "../components/layout/Layout";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NotFoundPage() {
  return (
    <Layout>
      <SearchEngineOptimization title="Not Found" />
      <Container
        fluid
        className={`py-3 min-vh-100 d-flex justify-content-center ${notFoundStyles.notFoundContainer}`}
      >
        <Row className="align-items-center text-center">
          <Col lg={true}>
            <h1 className="fw-bold">Hello! This page isn't ready yet!</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
