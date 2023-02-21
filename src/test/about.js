import React from 'react';
import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const about = () => {
    return(
        <>
            <div className='about'>
            <Container fluid className='about-top'>
                <Row>
                    <Col><h1>회사 소개</h1></Col>
                </Row>
            </Container>
                <img src='/about.jpg' alt='about 이미지'/>
            </div>
        </>
    );
}

export default about;