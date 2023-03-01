import React from 'react';
import '../css/LectureList.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import responsive from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import useEffect from 'react-bootstrap/Image';
import Carousel from 'react-grid-carousel'
import "react-multi-carousel/lib/styles.css";
import ListGroup from 'react-bootstrap/ListGroup';


const LectureList = () => {

  
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
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
                <div className='popular-lecture'>
                    <h3 className='popular-lecture-header'>인기 강좌 목록</h3>
                    <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                    </Carousel>
                    </div>
                <div className='entire-lecture'>
                    <div className='main-lecture'>
                        <h3 className='main-lecture-header'>대표 강좌 목록</h3>
                        <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='best-lecture'>
                        <h3 className='best-lecture-header'>베스트 강좌 목록</h3>
                        <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                    </Carousel>
                    </div>
                    <div className='recommend-lecture'>
                        <p className='recommend-lecture-header'>추천 강좌 목록</p>
                        <Carousel cols={4} rows={1} gap={20} breakpoint={767} loop>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=2" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" height="124%" src="https://picsum.photos/800/600?random=3" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img width="100%" height="124%" src="https://picsum.photos/800/600?random=1" />
                        </Carousel.Item>
                        
                    </Carousel>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
        
export default LectureList;