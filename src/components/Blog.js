import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <div>
            <h2 className="heading"> Articles </h2>
            <Container>
                <Row className="blogBox">
                    <h3>
                        Unfrequently penning down my thoughts on technology,
                        travel, projects keeping me busy, life in general and
                        more. If I wrote more, this page would have been called
                        a blog.
                    </h3>
                </Row>
                <Row className="ktorBox">
                    <Link to="/ktor-rest-api">
                        <h1
                            style={{
                                fontSize: '50px',
                                fontWeight: '600',
                                lineHeight: '0.9em',
                                marginTop: '0',
                            }}
                        >
                            RESTful APIs with Kotlin and Ktor
                        </h1>
                    </Link>
                    <h3 style={{ marginTop: '7%' }}>
                        <p>
                            Learn how to use the new Ktor framework to create
                            REST APIs.{' '}
                        </p>
                    </h3>
                </Row>
            </Container>
        </div>
    )
}
