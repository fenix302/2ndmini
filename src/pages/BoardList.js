import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class BoardList extends Component {
    
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>게시글1</td>
                        <td>누구세요</td>
                        <td>2023-02-23</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>게시글2</td>
                        <td>누구세요</td>
                        <td>2023-02-23</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>게시글2</td>
                        <td>누구세요</td>
                        <td>2023-02-23</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default BoardList;