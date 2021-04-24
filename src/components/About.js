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
                        Hey there! I'm Sangeet, a final year undergrad at BITS
                        Pilani Goa Campus and a budding Software Developer.
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
                <Row className="workBox">
                    <h1
                        style={{
                            marginLeft: '40px',
                            fontSize: '80px',
                            fontWeight: '800',
                            position: 'relative',
                            lineHeight: '0.9em',
                        }}
                    >
                        {' '}
                        Life at ClearTax{' '}
                    </h1>
                    <h3
                        style={{
                            marginTop: '20%',
                            marginBottom: '20%',
                        }}
                    >
                        {' '}
                        I currently work at ClearTax as a Software Developer
                        Intern. I feel a developer's life is to make life easier
                        for others and that's what we are doing at Cleartax,
                        making financial life easier for millions of Indians.
                    </h3>
                </Row>
            </Container>
        </div>
    )
}
