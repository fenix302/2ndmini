import React from 'react';
import '../css/LectureList.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap';
import Carousel from 'react-grid-carousel'
import "react-multi-carousel/lib/styles.css";
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import Registrations from './Registration';


const LectureList = () => {

  
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1023, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile1: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
          },
        mobile2: {
          breakpoint: { max: 463, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(
        <>
            <div className='LectureList'>
                <div className="LectureList-header">
                    <div className="name">
                            <p className="LectureList-header-text">강좌 목록</p>
                    </div>
                </div>
                <div className='popular'>
                <div className='popular-lecture'>
                    <h3 className='popular-lecture-header'>인기 강좌 목록</h3>
                    <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                      
                         <Carousel.Item className='card'>
                       
                                    <Link to="/registration">
                            <img width="100%" className='card-img-top' src="https://picsum.photos/800/600?random=1" /> 
                            </Link>
                            <Card.Body>
        <Card.Title>강좌이름</Card.Title>
    
        </Card.Body>
                          
                        </Carousel.Item>
                       
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" src="https://picsum.photos/800/600?random=2" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" src="https://picsum.photos/800/600?random=3" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                    </div>
                <div className='entire-lecture'>
                    <div className='main-lecture'>
                        <h3 className='main-lecture-header'>대표 강좌 목록</h3>
                        <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=2" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=3" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='best-lecture'>
                        <h3 className='best-lecture-header'>베스트 강좌 목록</h3>
                        <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=2" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=3" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='recommend-lecture'>
                        <h3 className='recommend-lecture-header'>추천 강좌 목록</h3>
                        <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=2" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=3" />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to="/registration">
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Link>
                        </Carousel.Item>
                     
                        
                    </Carousel>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
        
export default LectureList;