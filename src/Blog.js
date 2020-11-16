import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Project() {
  return (
    <div>
        <h2 className = "heading"> Blog </h2>
        <Container>
            <Row className = "blogBox">
                <h3 style = { { marginTop: "70px" } }>So much to say <br /> yet nothign to write.</h3>
                <h3 style = { { marginTop: "40px" } }> Well this is embarassing. I've not written anything lately. Check this section out in future for any new piece</h3>
            </Row>
        </Container>
    </div>
  )
}
