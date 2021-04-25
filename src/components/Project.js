import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Project() {
    return (
        <div>
            <h2 className="heading"> Projects </h2>
            <Container>
                <Row className="projectBox">
                    <h3>
                        <p>
                            I always strive to make out time for projects. I
                            have tried to engage in projects that require me to
                            work outside my comfort and knowledge set to keep on
                            learning new languages and development techniques to
                            improve myself continuously.
                        </p>
                        <p
                            style={{
                                marginTop: '10%',
                                marginDown: '10%',
                            }}
                        >
                            It has always been my intention to open source my
                            projects and code so that people can access, learn,
                            provide feedback and build upon it. Here, I have
                            listed some of my favorite projects. You can look at
                            them all at my{' '}
                            <a href="https://github.com/sangeetds">
                                {' '}
                                Github profile{' '}
                            </a>
                        </p>
                    </h3>
                </Row>
                <Row className="projectBoxFirst">
                    <h1
                        style={{
                            marginLeft: '20px',
                            fontSize: '80px',
                            fontWeight: '800',
                            position: 'relative',
                            lineHeight: '0.6em',
                        }}
                    >
                        {' '}
                        ISDb{' '}
                    </h1>
                    <h3>
                        <p>
                            {' '}
                            The IMDb for Songs. An Android App to find, rate and
                            share your favorite songs. The app and the backend
                            APIs are all written in pure Kotlin. For the
                            backend, Spring is used as the framework and MongoDB
                            has been used to store the data.{' '}
                        </p>
                        <p
                            style={{
                                marginTop: '10%',
                            }}
                        >
                            You can find the documentation of the backend
                            applicaion{' '}
                            <a href="https://pure-ridge-30175.herokuapp.com/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/">
                                {' '}
                                here{' '}
                            </a>
                            and you can find more about the app at{' '}
                            <a href="https://github.com/sangeetds/isdb-android-app">
                                {' '}
                                here.{' '}
                            </a>
                        </p>
                    </h3>
                </Row>
                <Row className="projectBoxSecond">
                    <h1
                        style={{
                            marginLeft: '20px',
                            fontSize: '80px',
                            fontWeight: '800',
                            position: 'relative',
                            lineHeight: '0.6em',
                        }}
                    >
                        {' '}
                        Tetris{' '}
                    </h1>
                    <h3>
                        <p>
                            The classic game implemented for Android. The user
                            can play simple tetris games with this android app.
                            This application is written in Kotlin and uses
                            Google Room for storing data.{' '}
                        </p>
                        <p
                            style={{
                                marginTop: '16%',
                            }}
                        >
                            You can find more about the app{' '}
                            <a href="https://github.com/sangeetds/Tetris">
                                {' '}
                                here.{' '}
                            </a>
                        </p>
                    </h3>
                </Row>
                <Row className="projectBoxThird">
                    <h1
                        style={{
                            marginLeft: '0px',
                            fontSize: '60px',
                            fontWeight: '800',
                            position: 'relative',
                            lineHeight: '0.9em',
                        }}
                    >
                        {' '}
                        Expense Tracker{' '}
                    </h1>
                    <h3>
                        <p>
                            A web app built with MERN(MongoDB, Express.js,
                            React.js, Node.js) stack which helps in easy and
                            maintable track of your expenses and income.{' '}
                        </p>
                        <p
                            style={{
                                marginTop: '16%',
                            }}
                        >
                            You can have a look at the app{' '}
                            <a href="https://intense-fjord-30851.herokuapp.com">
                                {' '}
                                here.{' '}
                            </a>
                        </p>
                    </h3>
                </Row>
            </Container>
        </div>
    )
}
