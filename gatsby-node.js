const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const project = path.resolve("./src/templates/project.js");
  const ctf = path.resolve("./src/templates/ctf.js");
  const blogPost = path.resolve("./src/templates/blog-post.js");

  const { data } = await graphql(`
    query queryMarkdownPages {
      allMdx {
        nodes {
          frontmatter {
            type
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    if (node.frontmatter.type === "project") {
      actions.createPage({
        path: "/projects/" + node.frontmatter.slug,
        component: project,
        context: { slug: node.frontmatter.slug },
      });
    } else if (node.frontmatter.type === "ctf") {
      actions.createPage({
        path: "/ctfs/" + node.frontmatter.slug,
        component: ctf,
        context: { slug: node.frontmatter.slug },
      });
    } else {
      actions.createPage({
        path: "/blog/" + node.frontmatter.slug,
        component: blogPost,
        context: { slug: node.frontmatter.slug },
      });
    }
  });
};
