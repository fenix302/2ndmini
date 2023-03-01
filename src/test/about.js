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
        {/* 페이지 헤더 */}
		<div className="page_header">
			<div className="company_header">
				<div className="name">
					<p className="comeText">회사소개</p>
				</div>
			</div>
        </div>        
        </>
    );
}

export default about;