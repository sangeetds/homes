import React from 'react'
import ktor from '../images/k.png'

export default function KtorBlog() {
    return (
        <div>
            <h1
                style={{
                    fontSize: '45px',
                    fontWeight: '500',
                    marginTop: '5%',
                    marginLeft: '16%',
                    marginRight: '22%',
                    fontFamily: "'Montserrat', sans-serif",
                }}
            >
                RESTful APIs with Kotlin and Ktor
            </h1>
            <img
                src={ktor}
                alt="Kotlin Ktor Logo"
                height="500"
                style={{
                    width: '98%',
                    marginLeft: '1%',
                    marginTop: '2%',
                }}
            />
            <div
                style={{
                    marginTop: '8%',
                    marginLeft: '21%',
                    marginRight: '18%',
                    fontWeight: '300',
                    lineHeight: '1.6',
                    letterSpacing: '0',
                    fontSize: '21px',
                    fontFamily: "'Montserrat', sans-serif",
                }}
            >
                <h2> What are REST APIs? </h2>
                <p>
                    One of the delights of working with Ruby and jQuery is the
                    ability to chain
                </p>
                <h2 style={{ marginTop: '10%' }}> What are we building </h2>
                <p>
                    In this tutorial we will build a simple backend Application
                    for pet store. We will expose various endpoints that will
                    let people (we will talk about Security, Authentication and
                    authorisation later) get information about the pets in the
                    store, add a new member to the store or remove them from the
                    store.
                </p>
                <h2 style={{ marginTop: '10%' }}> Why Kotlin and Ktor? </h2>
                <p>
                    Whenever I set out for building out a new
                    program/application, I look for two things:-
                    <ul style={{ marginTop: '3%' }}>
                        {' '}
                        <li> How hard is the learning steep</li>
                        <li> Can it be build with Kotlin?</li>
                    </ul>{' '}
                    Kotlin brings all the power of a statically typed language
                    and provides the sweetest syntax to write the strongest
                    application.  Ktor is the latest creation from JetBrains,
                    the brains behind Kotlin. It's an asynchronous web framework
                    for writing simple as well as highly scalable microservices.
                    There are numerous frameworks for Kotlin but most of them
                    were actually built for Java and none of their Kotlin
                    version feels very Kotlin-y or leverages the full power of
                    Kotlin as much as Ktor does.
                </p>
                <h2 style={{ marginTop: '10%' }}> Building the application </h2>
                <p></p>
                <h2 style={{ marginTop: '10%' }}> What's next? </h2>
                <p>
                    We can add persistence to our application by using any
                    database of our choice(KTOR INTEGRATION WITH A DB) such as
                    MySQL, PostgreSQL, etc or even NoSQL options such as
                    MongoDB. We can build an UI such as a webapp (Kotlin now
                    also targets JS and we also have many libraries and
                    frameworks that can help seamless webapps) or an Android app
                    to help display our data in a better fashion.
                </p>
            </div>
        </div>
    )
}
