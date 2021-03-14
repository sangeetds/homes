import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Project() {
    return (
        <div>
            <h2 className="heading"> Projects </h2>
            <Container>
                <Row className="projectBox">
                    <h3>.</h3>
                    <h3 style={{ marginTop: '100px' }}>
                        {' '}
                        You can look at my projects{' '}
                        <a href="www.github.com/sangeetds">here </a>
                    </h3>
                    <h4 style={{ paddingTop: '100px' }}>
                        .<br />
                    </h4>
                </Row>
            </Container>
        </div>
    )
}
