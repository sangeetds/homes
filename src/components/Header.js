import React from 'react'
import { Container, Image } from 'react-bootstrap';
import '../App.css';
import Footer from './Footer'

export default function Header() {
  return (
    <header className = "head">
        <Image className = "me" src = "https://raw.githubusercontent.com/sangeetds/home/master/public/me.png" style = { { borderRadius: "30%", marginLeft: "10%", marginTop: "10%", width: "35%" } }/>
        <Container style = { { padding: '10%', paddingTop: 0 } }>
            <h2 className = "hey">Hey! I am Sangeet.</h2>
            <p className = "work">I work at Cognitree as a Java Developer Intern.</p>
            <div className = "list">
                <ul>
                    <li><a href = "#about">About</a></li>
                    <li><a href = "#project">Projects</a></li>
                    <li><a href = "#blog">Blog</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </div>
            <Footer className = "foot" />
        </Container>
    </header>
  )
}
