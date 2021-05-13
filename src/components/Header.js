import React from 'react'
import '../App.css'
import logo from '../images/me.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="head">
            <img
                className="me"
                alt="That's me"
                src={logo}
                style={{
                    borderRadius: '30%',
                    marginLeft: '10%',
                    marginTop: '10%',
                    width: '35%',
                }}
            />
            <div
                style={{
                    padding: '10%',
                    paddingTop: '0',
                    fontSize: '20px',
                    fontWieght: '300',
                    letterSpacing: '10',
                    lineHeight: '1.5',
                    fontFamily: 'Montserrat, sans-serif',
                }}
            >
                <h2 className="hey">Hey! I am Sangeet.</h2>
                <p
                    className="work"
                    style={{
                        fontSize: '18px',
                    }}
                >
                    I work at Cleartax as a Software Developer Intern.
                </p>
                <div className="list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Articles</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
