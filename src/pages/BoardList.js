import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Container, Table, Button, Col, Form } from 'react-bootstrap'
import ReactPaginate from 'react-js-pagination'
import axios from 'axios'

import "../css/list.css"

class BoardList extends Component {
    
	constructor(props) {
		super(props)
  
		this.state = {
		   data: [],
		   page: 0,
		   count: 0,
		   perPage: 0,
		   search: null,
		   boards: []
		}
		
		this.getList();
	 }
  
	 getDetail() {
		axios.get("/view.do").then((res) => {
		   const data = res.data;
		   this.setState({
			 bno: data.bno,
			 title: data.title,
			 writer: data.writer,
			 regdate: data.regdate    
		   });
		   console.log(res)
		  });   
	 }
  
	 getList() {
		axios.get("/select.do").then((res) => {
		   const data = res.data;
		   this.setState({
			 bno: data.bno,
			 title: data.title,
			 writer: data.writer,
			 regdate: data.regdate    
		   });
		   console.log(res)
		  });   
	 }
	
	

    render() {
		const {page, count, perPage, title, writer, regdate, data, bno } = this.state
		

        return (
			<>
			<div className="board_header">
                <div className="name">
                    <p className="about-header-text">자유게시판</p>
                </div>
            </div>
			<Container>
                <Link to='/Insert'>
                    <Button className='write btn-secondary btn-dark text-white'>새 글쓰기</Button>
                </Link>
                <Table table-striped table-bordered table-hover>
					<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
							<th>작성일</th>
						</tr>
					</thead>
						
				</Table>
				<Table>
                    <Col md={2}>
                        <Form.Group>
                            <Form.Control  type='text' onChange={(event) => this.setState({ search: event.target.value })}/>
                        </Form.Group>
                        <Button className='search btn-secondary btn-dark' onClick={() => this.search()}>검색</Button>
                    </Col>
                {/* 페이징 처리 */}
					<ReactPaginate
						activePage={page}
						totalItemsCount={count}
						itemsCountPerPage={perPage}
						onChange={page => this.handlePage(page)}
						
						innerClass='pagination'
						itemClass='page-item'
						activeClass='active'

						nextPageText='다음'
						prevPageText='이전'
						/>
                </Table>
			</Container>
			</>  
        );
    }
}

export default BoardList;