import React from 'react'
import ktor from '../images/k.png'

export default function KtorBlog() {
    return (
        <div>
            <h1
                style={{
                    fontSize: '45px',
                    fontWeight: '800',
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
                    marginLeft: '20%',
                    marginRight: '17%',
                    fontWeight: '300',
                    lineHeight: '1.6',
                    letterSpacing: '0',
                    fontSize: '19px',
                    fontFamily: "'Montserrat', sans-serif",
                }}
            >
                <h2> What are REST APIs? </h2>
                <p>
                    Application Programming Interface or API can be simply
                    defined as an intermediary which allows two applications to
                    talk to each other. Over a majority of API are actually
                    REpresentational State Transfer or REST APIs. You likely
                    encounter thousands of such APIs in your daily internet
                    journey, be it searching for videos on YouTube or searching
                    for someone on Instagram.{' '}
                    <p>
                        REST is an architectural design concept for modelling
                        and accessing the resource in your application. It's
                        always advised to follow its rules to run into problems
                        down the road.{' '}
                    </p>
                </p>
                <h2 style={{ marginTop: '10%' }}> What are we building </h2>
                <p>
                    In this tutorial, we will build a simple backend Application
                    for the pet store. We will expose various endpoints that
                    will let people get information about the pets in the store,
                    add a new member to the store or remove them from the store.
                </p>
                <h2 style={{ marginTop: '10%' }}> Why Kotlin and Ktor? </h2>
                <p>
                    Whenever I set out for building out a new
                    program/application, I look for two things:-
                    <ul style={{ marginTop: '3%' }}>
                        {' '}
                        <li> How hard is the learning curve</li>
                        <li> Can it be built with Kotlin?</li>
                    </ul>{' '}
                    Kotlin brings all the power of a statically typed language
                    and provides the sweetest syntax to write the most robust
                    application. It is designed to be completely interoperable
                    with Java and shares its tooling with Java. It brings many
                    advantages over Java, such as type-safety, higher-order
                    functions, coroutines and much more. Listing all benefits
                    will make an article in itself. <br /> <br />
                    Ktor is the latest creation from JetBrains, the brains
                    behind Kotlin. It's an asynchronous web framework that
                    allows developers to create highly flexible, module and
                    scalable microservices. Even though it imposes some
                    conventions, it rests most of the power in the developer's
                    hands. There are numerous frameworks for Kotlin, but most of
                    them were actually built for Java. None of their Kotlin
                    version feels very Kotlin-y or leverages the full power of
                    Kotlin as much as Ktor does. Being backed by JetBrains, you
                    can expect excellent support and documentation.
                </p>
                <h2 style={{ marginTop: '10%' }}> Setting up the project </h2>
                <p>
                    Let's begin with setting up the project. I'm using Intellij
                    IDEA IDE though you can use any IDE of your choice. One
                    advantage of using Intellij is that it provides many plugins
                    to quickly set up a project. You can even choose to use{' '}
                    <a
                        href="https://ktor.io/quickstart/generator.html#"
                        style={{ color: '#ec8bd4' }}
                    >
                        start.ktor.io
                    </a>
                    , Maven or Gradle to set up your project.{' '}
                </p>
                <p>
                    This is how your <b>pom.xml</b> or <b>build.gradle</b> file
                    might look like.
                </p>
                <p>And this how your project structure might look.</p>
                <h2 style={{ marginTop: '10%' }}> Let's build the server </h2>
                <p>
                    To run a Ktor application, you need to create a server
                    first. There's two way to do it:{' '}
                    <ul style={{ marginTop: '3%' }}>
                        {' '}
                        <li>
                            {' '}
                            EmbeddedServer: This is the simplest way to create
                            your server where you can pass different parameters
                            such as the server type, port, etc., in code and run
                            the application.
                        </li>
                        <li>
                            {' '}
                            EngineMain: This provides more flexibility as you
                            can define the parameters in <b>
                                application.conf
                            </b>{' '}
                            file in resources, and the server will load the
                            changes without any recompilation.
                        </li>
                    </ul>{' '}
                    Let's begin with an embeddedServer to create a simple
                    server. Let's give a look at the <b>Application.kt</b> file
                    in the src directory. It might contain the code for
                    engineMain if you created the project with the Intellij
                    plugin. You may replace the code with this code.
                    <p>Let's dissect the code.</p>
                    <ol style={{ marginTop: '3%' }}>
                        <li>
                            This is the main module of the app. As you can see,
                            I've not passed <b>args</b> as an argument to the
                            main function. Kotlin provides flexibility over
                            choosing to pass args as per your requirement.
                        </li>
                        <li>
                            This declares the server using <b>Netty</b> which
                            will run on port 8080.
                        </li>
                        <li>
                            Routing is a feature which enables us to handle with
                            all the incoming requests. Inside this, we can
                            define routes.
                        </li>
                        <li>
                            We have defined a route, which will respond to all{' '}
                            <b>GET</b> requests made to <b>/</b>
                        </li>
                        <li>
                            This will treat the HTTP call and respond with a
                            text. This tutorial wouldn't do justice if we didn't
                            check our server first by replying{' '}
                            <b>`Hello World!`</b>
                        </li>
                    </ol>
                    <p>
                        Let's run the application and see whether everything's
                        working fine or not. You might see something like this
                        in your console. You can click on the address on the
                        console or go to your browser and hit{' '}
                        <b>localhost:8080</b> (given you passed 8080 as the port
                        value). (given you passed 8080 as the port value). You
                        might see `Hello World!` on your browser screen. The
                        browser serves as an effective way to make GET requests
                        but has no mean to make any other type of requests.
                        Therefore, we will use <b>curl</b> for making further
                        requests. You can even use Intellij IDEA's in-built HTTP
                        client or Postman to make requests.
                    </p>
                </p>
                <h2 style={{ marginTop: '10%' }}> What's next? </h2>
                <p style={{ marginBottom: '10%' }}>
                    We can add persistence to our application by using any
                    database of our choice(KTOR INTEGRATION WITH A DB) such as
                    MySQL, PostgreSQL, etc. or even NoSQL options such as
                    MongoDB. We can build a UI such as a web app (Kotlin now
                    also targets JS and can help create seamless web apps) or an
                    Android app to help display our data better.
                </p>
            </div>
        </div>
    )
}
