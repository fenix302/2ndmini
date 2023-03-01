import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Container, Col, Table, Form, Button } from 'react-bootstrap'
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
		}

		this.getData()
	}

	getData() {
		// 게시글 리스트를 읽어와 저장
		axios.get('/BoardList').then(res => {
			const data = res.data
			this.setState({ data: this.appendChkOpt(data.data), ...data })
		})
	}

	search() {
		const { search } = this.state // 검색어를 읽어옴

		// 검색어 쿼리로 요청 및 저장
		axios.get('/BoardList', { params: { search } }).then(res => {
			const data = res.data
			this.setState({ data: this.appendChkOpt(data.data), ...data })
		})
	}

	handlePage(page) {
		const { search } = this.state

		// 페이지 업데이트. 검색어와 페이지 정보로 읽어와 저장
		axios.get('/BoardList', { params: { search, page } }).then(res => {
			const data = res.data
			this.setState({ data: this.appendChkOpt(data.data), ...data })
		})
	}

	
    render() {
		const {page, count, perPage } = this.state
		

        return (
			<>
			<div className="page_header">
				<div className="board_header">
					<div className="name">
						<p className="comeText">자유게시판</p>
					</div>
				</div>
          	</div>
			<Container>
                <Link to='/Insert'>
                    <Button className='write btn-secondary btn-dark text-white'>새 글쓰기</Button>
                </Link>
                <Table>
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
                    </Col>
                    <Col md={2}>
                        <Button className='btn-secondary btn-dark' onClick={() => this.search()}>검색</Button>
                    </Col>
                </Table>
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
			</Container>
			</> 
        );
    }
}

export default BoardList;