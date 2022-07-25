import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import "../styles.css";
import { Row, Col, Carousel, Card, Button } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
export default function Landing() {
    
  const [count, setCount] = useState("Download");

  return (
    <div className="App">
      <section id="title">
        <Navbar variant="dark" expand="lg">
          <Container className="container-fl">
            <Navbar.Brand className="navbar-brand" href="#home">
              React tinDog
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="links" href="#home">
                  Contact
                </Nav.Link>
                <Nav.Link className="links" href="#link">
                  Pricing
                </Nav.Link>
                <Nav.Link className="links" href="#link">
                  Donwload
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Row>
          <Col lg={6} md={12}>
            <h1>Meet new and interesting dogs nearby.</h1>
            <Button variant="dark" size="lg" className=" download-btn">
              <i className="fab fa-apple"></i> Download
            </Button>
            <Button
              className="download-btn"
              onClick={() => setCount("Mike con operator es manco")}
              variant="outline-light"
              size="lg"
            >
              <i className="fab fa-google-play"></i>
              {count}
            </Button>
          </Col>
          <Col lg={6} md={12} className="positioning">
            <img
              className="title-img"
              id="iphoneimage"
              src={require("../img/iphone6.png")}
              alt="iphone-mockup"
            />
          </Col>
        </Row>
      </section>

      <section id="features">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <i className=" feature-icon fa fa-check-double i-features fa-4x"></i>
            <h3 className="feature-title">
              <i className="fa-solid fa-circle-check"></i>Easy to use.
            </h3>
            <p className="feature-desc">
              So easy to use, even your dog could do it.
            </p>
          </Col>

          <Col>
            <i className="feature-icon fa fa-bullseye i-features fa-4x"></i>
            <h3 className="feature-title">Elite Clientele</h3>
            <p className="feature-desc">
              We have all the dogs, the greatest dogs.
            </p>
          </Col>

          <Col>
            <i className=" feature-icon fa fa-heart i-features fa-4x"></i>
            <h3 className="feature-title">Guaranteed to work.</h3>
            <p className="feature-desc">
              Find the love of your dog's life or your money back.
            </p>
          </Col>
        </Row>
      </section>

      <section id="testimonials">
        <Carousel fade>
          <Carousel.Item>
            <h2 className="testimonial-text">
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>

            <img
              className="testimonials-image"
              src={require("../img/dog-img.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <em>Pebbles, New York</em>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <h2 className="testimonial-text">
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img
              className="testimonials-image"
              src={require("../img/lady-img.jpg")}
              alt="lady-profile"
            />
            <Carousel.Caption>
              <em>Beverly, Illinois</em>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section id="press">
        <img
          className="press-logo"
          src={require("../img/TechCrunch.png")}
          alt="tc-logo"
        />
        <img
          className="press-logo"
          src={require("../img/tnw.png")}
          alt="tnw-logo"
        />
        <img
          className="press-logo"
          src={require("../img/bizinsider.png")}
          alt="tnw-logo"
        />
        <img
          className="press-logo"
          src={require("../img/mashable.png")}
          alt="tnw-logo"
        />
      </section>

      <section id="pricing">
        <h2>A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p>

        <Row>
          <Col className="pricing-card" lg={4}>
            <Card>
              <Card.Header className="price-header">
                <h3 className="card-top">Chihuahua</h3>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1>Free</h1>
                </Card.Title>
                <Card.Text>
                  <p>5 Matches Per Day</p>
                  <p>10 Messages Per Day</p>
                  <p>Unlimited App Usage</p>
                </Card.Text>
                <Button className="outline-card-btn" variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="pricing-card" lg={4}>
            <Card>
              <Card.Header className="price-header">
                <h3 className="card-top">Labrador</h3>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1>$49 / mo</h1>
                </Card.Title>
                <Card.Text>
                  <p>Unlimited Matches</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                </Card.Text>
                <Button className="card-btn" variant="dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="pricing-card" lg={4}>
            <Card>
              <Card.Header className="price-header">
                <h3 className="card-top">Mastiff</h3>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1>$99 / mo</h1>
                </Card.Title>
                <Card.Text>
                  <p>Pirority Listing</p>
                  <p>Unlimited Matches</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                </Card.Text>
                <Button className="card-btn" variant="dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="cta">
        <h3 className="cta-text">Find the True Love of Your Dog's Life Today.</h3>
        <Button variant="dark" size="lg" className=" download-btn">
          <i className="fab fa-apple"></i> Download
        </Button>
        <Button
          className="download-btn"
          onClick={() => setCount("Mike con operator es manco")}
          variant="outline-light"
          size="lg"
        >
          <i className="fab fa-google-play"></i>
          {count}
        </Button>
      </section>

      <footer id="footer">
        <a href="https://twitter.com/Syas23150893">
          <i className="f-icon fa fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/christian-soto-3a0a24240/">
          <i className="f-icon fa fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/ChrisSotoMtz">
          <i className="f-icon fa fa-github fa-2x"></i>
        </a>
        <a href="mailto:chris_osm@hotmail.com">
          <i className="f-icon fa fa-envelope fa-2x"></i>
        </a>
        <p className="copy-text">© Copyright TinDog</p>
      </footer>
    </div>
  );
}
