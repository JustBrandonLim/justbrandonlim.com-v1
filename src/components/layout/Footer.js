import * as React from "react";

//Style
import * as footerStyles from "../../styles/components/layout/footer.module.css";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faHackerrank,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <Container fluid className="pt-3 bg-light">
        <Row className="pb-3 text-center">
          <Col lg={true}>
            <Stack
              direction="horizontal"
              gap={3}
              className={`justify-content-center ${footerStyles.linksWrapper}`}
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
        </Row>
        <Row className="justify-content-center text-center">
          <Col lg={true}>
            <p>
              Designed and coded by <strong>Brandon Lim</strong>.
            </p>
            <p>Copyright &copy; 2022 - Present. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
