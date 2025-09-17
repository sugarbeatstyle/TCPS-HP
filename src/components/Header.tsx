import React, { useState } from 'react';
import type { MouseEvent } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLElement>, sectionId?: string) => {
    event.preventDefault();

    if (sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setExpanded(false);
  };

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="glowing-text"
          onClick={(event: MouseEvent<HTMLElement>) => handleNavClick(event)}
        >
          TOKYO Chill Pop Style
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={(event) => handleNavClick(event, 'home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={(event) => handleNavClick(event, 'about')}>
              About
            </Nav.Link>
            <Nav.Link href="#creator" onClick={(event) => handleNavClick(event, 'creator')}>
              Creator
            </Nav.Link>
            <Nav.Link href="#season" onClick={(event) => handleNavClick(event, 'season')}>
              Season
            </Nav.Link>
            <Nav.Link href="#goods" onClick={(event) => handleNavClick(event, 'goods')}>
              Goods
            </Nav.Link>
            <Nav.Link href="#faq" onClick={(event) => handleNavClick(event, 'faq')}>
              FAQ
            </Nav.Link>
            <Nav.Link href="#game" onClick={(event) => handleNavClick(event, 'game')}>
              Game
            </Nav.Link>
            <Nav.Link href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
