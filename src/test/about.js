import React from 'react';
import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'


const about = () => {
    return(
        <>
            <div className='about'>
            <div className="about-header">
                  <div className="name">
                        <p className="about-header-text">회사 소개</p>
                    </div>
              </div>
                <div className='main-information text-center'>
                    <h2>구로 문화센터</h2>
                    <p>저희 문화센터는 어쩌구저쩌구 교육 서비스를 제공하기 위해 이런저런 노력을 하고 있습니다 <br />
                        그리하여 고객님들께 더 큰 감동을 주네마네 어쩌구저쩌구  <br />
                        잡설이 길었지만 여튼 누구에게나 열린 문화 공간을 추구하여 결론적으로 어쩔티비</p>
                    <img src='/about.jpg' alt='about 이미지' className='img-fluid'/>
                </div>
                <div  className='history'>
                <Container className='container'>
                <Row>
                    <Col>
                    <Card className='history-card'>
                        <ListGroup className="list-group-flush history-list list-group">
                            <ListGroup.Item className='history-card-list'>
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </ListGroup.Item>
                            <ListGroup.Item className='history-card-list'>
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </ListGroup.Item>
                            <ListGroup.Item className='history-card-list'>
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </ListGroup.Item>
                            <ListGroup.Item className='history-card-list'>
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='d-flex align-self-center'>
                    <img src='/historyimg.jpg' alt='history 이미지' className="history-img"/>
                    </Card>
                    </Col>
                    </Row>
                    </Container>
                    </div>
                </div>
                
        </>
    );
}

export default about;