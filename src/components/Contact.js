import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from './Footer'

export default function Project() {
    return (
        <div>
            <h2 className="heading">Say Hi! </h2>
            <Container>
                <Row className="contactBox">
                    <h1
                        style={{
                            marginTop: '80px',
                        }}
                    >
                        {' '}
                        Reach out to me at{' '}
                        <a className="mail" href="mailto:sangeet@saket.me">
                            sangeet@saket.me{' '}
                        </a>
                    </h1>
                    <Footer />
                </Row>
            </Container>
        </div>
    )
}
