import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Project() {
    return (
        <div>
            <h2 className="heading">Say Hi! </h2>
            <Container>
                <Row className="contactBox">
                    <h1
                        style={{
                            marginTop: '80px',
                            marginRight: '30px',
                            marginLeft: '0px',
                        }}
                    >
                        {' '}
                        Reach out to me at{' '}
                        <a className="mail" href="mailto:sangeet@saket.me">
                            sangeet@saket.me{' '}
                        </a>
                    </h1>
                </Row>
            </Container>
        </div>
    )
}
