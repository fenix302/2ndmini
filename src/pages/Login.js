import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/login.css";

const Login = () =>  {
    return (
        <>
            <style type="text/css">
                {`
                    .btn-flat {
                        background-color: purple;
                        color: white;
                    }

                    .btn-join{
                        background-color: orange;
                        color: white;
                    }
                `}
            </style>

            <Container fluid="sm">
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h1 className='login_txt'>로그인</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicId">
                                <Form.Control type="id" placeholder="아이디를 입력하세요" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                            </Form.Group>
                            
                            <div className="d-grid gap-2 mb-3">
                                <Button variant="primary" size='lg'>로그인</Button>
                                <Button variant="secondary" size='lg'><Link to={"/register"}>회원가입</Link></Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;