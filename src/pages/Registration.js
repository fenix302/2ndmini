import axios from "axios";
import React,{useEffect} from "react";
import { Container, Row, Col, Table, Button, Form, FormGroup, Label, Input } from "reactstrap";
import '../css/registration.css'

function Registration(props){
    useEffect(()=>{
        axios.get("/selectLecture.do")
        .then((res) =>{
            console.log(res.data.teacher);
            sessionStorage.setItem("teacher", res.data.teacher);
            sessionStorage.setItem("lectureType", res.data.lectureType);
            sessionStorage.setItem("lectureRoom", res.data.lectureRoom);
            sessionStorage.setItem("studentNum", res.data.studentNum);
            sessionStorage.setItem("lecturePrice", res.data.lecturePrice);
        }, [])
        .catch()
    })
    const teacher = sessionStorage.teacher;
    const lectureType = sessionStorage.lectureType;
    const lectureRoom = sessionStorage.lectureRoom;
    const studentNum = sessionStorage.studentNum;
    const lecturePrice = sessionStorage.lecturePrice;
    return(
        <>
            <Container>
                <div className="registLec">
                    <Row lg="2" xs="1">
                        <Col lg="10">
                            <p>[3/19 10:00] 
                            <br/>구로 문화센터 강좌제목 수강신청
                            </p>
                        </Col>
                        <Col lg="2">
                            <Button color="success">장바구니</Button>{' '}
                            <Button color="danger">신청하기</Button>
                        </Col>
                    </Row>
                </div>
                <Row lg="2" xs="1">
                    <Col>
                        <div className="leftArea">
                            <div className="LectureLeft">
                                <div className="LectureHead">
                                    <h3>강좌 소개</h3>
                                </div>
                                <div className="LectureArea">
                                    <img src="logo192.png"/>
                                    <h5>강좌 제목</h5><br/  >
                                    <span>
                                        창의성과 감성이 풍부해지는 실질적인 강좌
                                        <br/>
                                        현재의 트레디한 디자인을 쉽게 이해하고 배울수 있으며,
                                        <br/>
                                        뛰어난 손재주가 없어도 강좌 후 작품의 완성도가 높습니다.
                                        <br/>
                                        작품 소재를 오감으로 느껴보며, 감성이 충만해지는 실질적인 강좌입니다.
                                    </span><br />
                                    <div className="caution">
                                        <p>
                                            <span>★ 주의사항<br /></span>
                                        
                                            
                                            &nbsp; &nbsp; &nbsp;수강신청 기간 내 수강 신청하지 않으신 회원께서는<br/> 
                                            &nbsp; &nbsp; &nbsp;수강신청이 지난 후 신청하실 수 없습니다.
                                        </p>
                                    </div>

                                </div>
                                
                                    
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="rightArea">
                            <div className="LectureRight">
                                <div className="LectureImage">
                                    <img src="logo192.png" />
                                </div>
                                <div className="LectureTable">
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    강좌구분
                                                </th>
                                                <td>
                                                    {lectureType}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    학기
                                                </th>
                                                <td>
                                                    2023년 봄학기
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    강사명
                                                </th>
                                                <td>
                                                    {teacher}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강 기간
                                                </th>
                                                <td>
                                                    2023.03.19 ~ 2023.03.19
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강 시간
                                                </th>
                                                <td>
                                                    월요일 10:00 ~ 12:00
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    강의실
                                                </th>
                                                <td>
                                                    {lectureRoom}호
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강인원
                                                </th>
                                                <td>
                                                    {studentNum}명
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='table-light' scope="row">
                                                    수강료
                                                </th>
                                                <td>
                                                    {lecturePrice}원
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br /><br />
                <h1>구로 문화센터 강의 신청서 작성</h1>
                <br />
                <br />
                <Form>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="name">
                            이름
                            </Label>
                            <Input
                            id="name"
                            name="name"
                            placeholder="이름을 입력해 주세요"
                            type="name"
                            formMethod="post"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="email">
                            이메일
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            placeholder="이메일을 입력해 주세요"
                            type="email"
                            formMethod="post"
                            />
                        </FormGroup>
                        </Col>
                        <FormGroup>
                            <Label for="address">
                            주소
                            </Label>
                            <Input
                            id="address"
                            name="address"
                            placeholder="주소를 입력해 주세요"
                            formMethod="post"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="tel">
                            전화번호
                            </Label>
                            <Input
                            id="tel"
                            name="tel"
                            placeholder="전화번호를 입력해 주세요"
                            formMethod="post"
                            type="number"
                            />
                        </FormGroup>
                    </Row>
                </Form>
                <br />
                <br />
            </Container>

        </>
    )
}

export default Registration;