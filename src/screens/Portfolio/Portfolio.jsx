import React, { useState } from 'react'
import './Portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Portfolio() {
    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});


  function createModal(data) {
    return (
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{data.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: "200px" }} />
        </Modal.Body>
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          id='portfolio__modal__link'
        >
          Go to site
        </a>
        <Modal.Footer>
          <div>
            Technologies used:
            <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>{data.tech}</p>
            <Button onClick={() => setShow(false)}>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };

  const mapped = portfolioData.map((project, idx) => {
    return (
      <Card key={idx} id="portfolio__card">
        <Image
          onClick={() => {
            setSelectedProject({
              image: project.image,
              link: project.link,
              desc: project.desc,
              summary: project.summary,
              tech: project.tech,
            });
            setShow(true);
          }}
          src={project.image}
          className="portfolio__card__image"
        />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(selectedProject)}
      </Card>
    );
  });

  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTFOLIO</h1>
      <p>
        This is my Github page:{" "}
        <a
          href="https://github.com/AugusViggia"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/AugusViggia
        </a>
      </p>
      <Container fluid="lg" style={{ padding: '2rem 0' }}>
        <Row>
          {mapped}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio
