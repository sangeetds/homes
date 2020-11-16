import React from 'react'
import { Container, Image } from 'react-bootstrap';
import './App.css';
import Footer from './Footer'

export default function Header() {
  return (
    <header className = "head">
        <Image src = "https://raw.githubusercontent.com/sangeetds/home/master/public/me.png" style = { { borderRadius: "30%", marginLeft: "10%", marginTop: "10%", width: "35%" } }/>
        <Container style = { { padding: '10%', paddingTop: 0 } }>
            <h2>Hey! I am Sangeet.</h2>
            <p>I work at Cognitree as a Java Developer Intern.</p>
            <div>
                <ul>
                    <li><a href = "#about">About</a></li>
                    <li><a href = "#project">Projects</a></li>
                    <li><a href = "#blog">Blog</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </div>
            <Footer />
        </Container>
    </header>
  )
}
