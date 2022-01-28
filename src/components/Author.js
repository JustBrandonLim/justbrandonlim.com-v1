import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

//Style
import * as authorStyles from "../styles/components/author.module.css";

//React-Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export default function Author() {
  const data = useStaticQuery(graphql`
    query author {
      authorImage: file(relativePath: { eq: "BrandonLim.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            placeholder: BLURRED
            quality: 100
            height: 300
            width: 300
          )
        }
      }
      site {
        siteMetadata {
          author {
            name
            description
          }
        }
      }
    }
  `);

  return (
    <Row className="justify-content-center">
      <Col lg={true}>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center"
        >
          <GatsbyImage
            image={getImage(data.authorImage)}
            className={`shadow-lg ${authorStyles.authorImageWrapper}`}
            imgClassName={`shadow-lg ${authorStyles.authorImage}`}
            alt="Author Image"
          />
          <p>
            Written by <strong>{data.site.siteMetadata.author.name}</strong>.{" "}
            {data.site.siteMetadata.author.description}
          </p>
        </Stack>
      </Col>
    </Row>
  );
}
