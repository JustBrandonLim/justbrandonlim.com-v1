import * as React from "react";

import * as navigationBarStyles from "../styles/components/navigationbar.module.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">BRANDON LIM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="" activeKey="">
            <Nav.Link href="/#about" className={navigationBarStyles.navLink}>
              ABOUT
            </Nav.Link>
            <Nav.Link href="/#skills" className={navigationBarStyles.navLink}>
              SKILLS
            </Nav.Link>
            <Nav.Link href="/#showcase" className={navigationBarStyles.navLink}>
              SHOWCASE
            </Nav.Link>
            <Nav.Link href="/#contact" className={navigationBarStyles.navLink}>
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" activeKey="">
            <Nav.Link href="/resume" className={navigationBarStyles.navLink}>
              RESUME
            </Nav.Link>
            <Nav.Link href="/projects" className={navigationBarStyles.navLink}>
              PROJECTS
            </Nav.Link>
            <Nav.Link href="/ctfs" className={navigationBarStyles.navLink}>
              CTFS
            </Nav.Link>
            <Nav.Link href="/blog" className={navigationBarStyles.navLink}>
              BLOG
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
