import React from 'react'
import { Container, Image } from 'react-bootstrap'
import '../App.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="head">
            <Image
                className="me"
                src="https://raw.githubusercontent.com/sangeetds/home/master/public/me.png"
                style={{
                    borderRadius: '30%',
                    marginLeft: '10%',
                    marginTop: '10%',
                    width: '35%',
                }}
            />
            <Container style={{ padding: '10%', paddingTop: 0 }}>
                <h2 className="hey">Hey! I am Sangeet.</h2>
                <p className="work">
                    I work at Cleartax as a Software Developer Intern.
                </p>
                <div className="list">
                    <ul>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Footer className="foot" />
            </Container>
        </header>
    )
}
