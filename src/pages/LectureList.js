import React from 'react';
import '../css/LectureList.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const LectureList = () => {
    return(
        <>
            <div className='LectureList'>
                <div className="LectureList-header">
                    <div className="name">
                            <p className="LectureList-header-text">강좌 목록</p>
                    </div>
                </div>
                <div className='popular-lecture'>
                    
                        <Carousel>
                        <Container className='lecture-box'>
                        <Row class="">
                        
                        <Col md={2}>
                    <Image
                        alt="171x180"
                        src="/200x200.svg"
                    />
                    </Col>
                    <Col md={2}>
                    <Image
                        alt="171x180"
                        src="/200x200.svg"
                    />
                    </Col>
                    <Col md={2}>
                    <Image
                        alt="171x180"
                        src="/200x200.svg"
                    />
                    </Col>
                    <Col md={2}>
                    <Image
                        alt="171x180"
                        src="/200x200.svg"
                    />
                    </Col>
                    <Col md={2}>
                    <Image
                        alt="171x180"
                        src="/200x200.svg"
                    />
                    </Col>
                    
                    </Row>
                   </Container> </Carousel> 
                   
                    </div>
                <div className='entire-lecture'>
                    <div className='main-lecture'>

                    </div>
                    <div className='best-lecture'>

                    </div>
                    <div className='recommend-lecture'>

                    </div>
                    <div className='event-lecture'>

                    </div>
                    <div className='price-down-lecture'>

                    </div>
                </div>
            </div>
        </>
    );
}
        
export default LectureList;