import * as React from "react";

import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import Helmet from "react-helmet";

SearchEngineOptimization.defaultProps = {
  language: "en",
  meta: [],
  description: "",
};

SearchEngineOptimization.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default function SearchEngineOptimization({
  description,
  language,
  meta,
  title,
}) {
  const { site } = useStaticQuery(graphql`
    query querySiteMetadata {
      site {
        siteMetadata {
          description
          keywords
          siteUrl
          title
          language
        }
      }
    }
  `);

  const keywords = site.siteMetadata.keywords;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        language,
      }}
      title={title}
      titleTemplate={defaultTitle ? `${defaultTitle} | %s` : null}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "keywords",
          content: keywords,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
      ].concat(meta)}
    />
  );
}
