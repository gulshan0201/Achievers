import { Button, Col, Row } from 'react-bootstrap';
import './HeaderFoot.css';
// import food from '../../assets/food.png';
import blankdp from '../../assets/blankdp.png'

const HeaderFoot = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://iaxyj.courses.store/';
      };
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="h_footer">
            <div className="h_ftCona">
              <img src={blankdp} alt="header-footer" className='img-fluid w-50 h-auto' />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="h_ftright">
            <div className="containerBox">
              <h1 style={{ color: '#3D3F42', fontWeight: "bold" }}>Education is the backbone of Nation. </h1>
              <p className='text-secondary my-4'>There should  be some institute to produce good doctors, engineers, MBA, lawyars coming from middle class families.</p>
              <p className='text-secondary'>Achievers academy like to teach students coming from any part of the society. Education should be universal and available to all we belive, if average student give good effort with proper guidence can do wonder in exams and career. Our mission is producings rankes in various exams and our vision is to provide excelence under various diversified fields. </p>
              <div className="d-flex justify-content-between align-items-start w-50 mt-4">
                <Button className='bg_login fw-bold border-0 ' onClick={handleButtonClick}>Our Cources</Button>
                <Button className='contact_btn'>contact us</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default HeaderFoot