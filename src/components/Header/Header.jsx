import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.css";
// import head_rightImg from '../../assets/headerRght.png';
// import right from '../../assets/right.jpeg'
import curve from "../../assets/curve.png";
import HeaderFoot from "../HeaderFoot/HeaderFoot";
// import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import image1 from "../../assets/1.jpeg";

const Header = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://iaxyj.on-app.in/app/home?orgCode=iaxyj&referrer=utm_source=copy-link&utm_medium=tutor-app-referral";
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="head_left">
              <span className="h_subTitle">Message from Director</span>
              <div className="w-75 mt-2 h_title">
                <h1 style={{ color: "#FB9431" }}>Empower Minds</h1>
                <h1 style={{ color: "#3D3F42" }}>Transform Lifes</h1>
                <h1 style={{ color: "#3D3F42" }}>Begins With Education</h1>
              </div>
              <p className="text-secondary">
                Education is the backbone of nations. A learning community
                dedicated to building respectful and responsible citizens and
                empowering all learners.
                <span className="" style={{ fontWeight: "bold" }}>
                  {" "}
                  Download Our app and get more details
                </span>
              </p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button
                  varient="primary"
                  style={{
                    backgroundColor: "#F29727",
                    fontWeight: "bold",
                    border: "none",
                    fontSize: "1.2rem",
                    padding: "10px 20px",
                    transition: "transform 0.3s ease",
                  }}
                  className="background: #F29727 fw-bold border-0 btn-custom-animation"
                  onClick={handleButtonClick}>
                Download App
                </Button>
                <Button
                  style={{
                    fontWeight: "bold",
                    border: "none",
                    fontSize: "1.2rem",
                    padding: "10px 20px", 
                  }}
                  className="contact_btn"
                >
                  contact us
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="head_right">
              <div className="imageContainer d-flex justify-content-end align-items-center">
                <img
                  src={image1}
                  alt="headerr-image"
                  className="head_rightImg"
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="d-flex my-4">
            <img src={curve} alt="curve" className="curve" />
          </div>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Comming soon...</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Comming soon...</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="custom-card">
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Comming soon...</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="headerFoot my-4">
          <HeaderFoot />
        </div>
      </Container>
    </div>
  );
};

export default Header;
