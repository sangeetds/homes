import React from 'react'
import '../App.css'
import { Container, Row } from 'react-bootstrap'

export default function About() {
    return (
        <div>
            <h2 className="heading"> About </h2>{' '}
            <Container>
                <Row className="aboutBox">
                    <h3>
                        I am a final year undergrad at BITS Pilani Goa Campus
                        and work as a Software Developer Intern at ClearTax.
                    </h3>
                    <h3 style={{ marginTop: '150px' }}>
                        {' '}
                        Find me where creativity meets technology.
                    </h3>
                    <h4>
                        Sangeet Narayan
                        <br />
                    </h4>
                </Row>
            </Container>
        </div>
    )
}
