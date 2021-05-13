import React from 'react'
import ktor from '../images/k.png'
import Gist from 'react-gist'

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
                    <p>
                        Let's begin with an embeddedServer to create a simple
                        server. Let's give a look at the <b>Application.kt</b>{' '}
                        file in the src directory. It might contain the code for
                        engineMain if you created the project with the Intellij
                        plugin. You may replace the code with this code.
                    </p>
                    <div
                        style={{
                            fontSize: '14px',
                            marginLeft: '-18%',
                            marginRight: '-14%',
                        }}
                    >
                        <Gist id="60e4bfdf66e7d5e0e32d456eca0f74d3" />
                    </div>
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
                            <b>GET</b> requests made to. <b>/</b>
                        </li>
                        <li>
                            This will treat the HTTP call and respond with a
                            text. This tutorial wouldn't do justice if we didn't
                            check our server first by replying{' '}
                            <b>`Hello World!`</b>
                        </li>
                        <li> This would start up the server.</li>
                    </ol>
                    <p>
                        Let's run the application and see whether everything's
                        working fine or not. Open your browser and go to the
                        address <b>localhost:8080</b> (given you passed 8080 as
                        the port value). You might see `Hello World!` on your
                        browser screen. The browser serves as an effective way
                        to make GET requests but has no mean to make any other
                        type of requests. Therefore, we will use <b>cURL</b> for
                        making further requests. You can even use Intellij
                        IDEA's in-built HTTP client or Postman to make requests.
                        The curl command for making a get request to our current
                        endpoint will be:
                        <pre>
                            <code class="language-html">
                                {' '}
                                curl localhost:8080{' '}
                            </code>
                        </pre>
                        There are a few changes that we can do our server. Let's
                        replace the routing endpoints with routing functions
                        that would match the requests. We will replace our
                        original route with a <b>get</b> function that now only
                        needs to take the URL and the code to handle the
                        request.
                    </p>
                    <div
                        style={{
                            fontSize: '14px',
                            marginLeft: '-18%',
                            marginRight: '-14%',
                        }}
                    >
                        <Gist id="98264c5624979c580e325ecf5f5c2afd" />
                    </div>
                </p>
                <h2 style={{ marginTop: '10%' }}> Let's create our store </h2>
                Let's have some pets for our store. For that we will create a
                data class in <b>Pet.kt</b>. Data class is yet another feature
                of Kotlin which are used for classes that stores data. The
                compiler automatically derives field accessors, hashCode(),
                equals(), toString(), as well as the useful copy() and
                componentN() functions which reduces a lot of boilerplate code.
                Creating a simple Pet class becomes as simple as:
                <p>
                    <div
                        style={{
                            fontSize: '14px',
                            marginLeft: '-18%',
                            marginRight: '-14%',
                        }}
                    >
                        <Gist id="14d45d510d93a1ae718add24e3f5dff5" />
                    </div>
                    <p>
                        We have introduced a <b>id</b> attribute which serves as
                        a little hack to get unique object identifiers. This
                        isn't the best approach but it will make work for now.
                    </p>
                    <p>
                        We can now add pets to our store by making a
                        initialising a list of pets in our <b>Application.kt</b>{' '}
                        file.
                    </p>
                    <div
                        style={{
                            fontSize: '14px',
                            marginLeft: '-18%',
                            marginRight: '-14%',
                        }}
                    >
                        <Gist id="8d1c4308641ecaa01cc3b066fe061836" />
                    </div>
                </p>
                <h2 style={{ marginTop: '10%' }}> Updating our endpoints </h2>
                <p>
                    Now for any GET requests, we can try returning the pets that
                    we have in our store. Update your <b>get</b> function to
                    return the list instead of the text.
                </p>
                <div
                    style={{
                        fontSize: '14px',
                        marginLeft: '-18%',
                        marginRight: '-14%',
                    }}
                >
                    <Gist id="11bedc62984605ed090f22f731051fd0" />
                </div>
                <p>
                    Let's run our server again and check the results in a
                    browser. Open any browser and go to <b>localhost:8080</b>.
                    What do you see? No need to refresh your browser, you
                    wouldn't see anything there.
                </p>
                <p>
                    Why do we see nothing on our screen? If you go back to your
                    IDE/console you will see that ktor has thrown an exception
                    starting like this:
                </p>
                <pre>
                    <code
                        style={{
                            fontSize: '18px',
                            marginLeft: '-16%',
                            marginRight: '-16%',
                            display: 'block' /* or inline-block */,
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                            maxHeight: '5.4em',
                            lineHeight: '1.8em',
                        }}
                    >
                        java.lang.IllegalArgumentException: <br />
                        Response pipeline couldn't transform 'class
                        java.util.ArrayList' to the OutgoingContent
                    </code>
                </pre>
                <p>
                    {' '}
                    Ktor is just trying to say that it has no way to actually
                    send our <b>petList</b> in a format that can be read by the
                    browser. Client and server mostly interacts with texts or
                    JSON and we just need to tell Ktor how to convert our{' '}
                    <b>petList</b> into such format. We will have to do two
                    things. First, we need to install a feature, namely{' '}
                    <b>ContentNegotiation</b> which is used to negotiate the
                    types between the client and the server and
                    serialize/deserialize the contents. For
                    serialization/deserialization we can use either the{' '}
                    <b>kotlinx.serialization</b> library or maybe <b>Gson</b>,
                    <b> Jackson</b>, etc. We will go with the in-built one.
                </p>
                <div
                    style={{
                        fontSize: '14px',
                        marginLeft: '-18%',
                        marginRight: '-14%',
                    }}
                >
                    <Gist id="2341d890661deffd4f3135d0f8564fb7" />
                </div>
                <p>
                    We will install ContentNegotiation inside our server and
                    call the <b>json</b> method. You might face some imports or
                    unresolved reference error, in that case update your{' '}
                    <b>pom.xml</b> or <b>build.gradle</b> file to include the{' '}
                    <b>ktor-serialization</b> dependency. For our second step,
                    we will also add the serializtion plugin. Finally, we will
                    add the <b>@Serializable</b> annotation to our <b>Pet</b>{' '}
                    data class in order to generate the serializer function.
                </p>
                <div
                    style={{
                        fontSize: '14px',
                        marginLeft: '-18%',
                        marginRight: '-14%',
                    }}
                >
                    <Gist id="e95f0844f19b2ff0fb054155400371ac" />
                </div>
                <p>
                    {' '}
                    Now if you open your browser and go to <b>localhost:8080</b>
                    , you will see an array of Pet JSONs. We can now even add
                    more routings. We can have another GET route to get pets by
                    their id. We can pass pet-id in our url (we put id in curly
                    braces in our path to denote that it's a variable) and get
                    information about a particular pet. We can add a <b>post</b>{' '}
                    function which will help us add another pet to our pet store
                    and even a <b> delete </b> function to allow people to adopt
                    a pet.
                </p>
                <div
                    style={{
                        fontSize: '14px',
                        marginLeft: '-18%',
                        marginRight: '-14%',
                    }}
                >
                    <Gist id="64624bf4689319399d6a78d8eb75e45c" />
                </div>
                <p>
                    Our application here just contains four routes but as the
                    number can grow over time and this routing tree may become
                    difficult to manage. We can actually club the routes
                    according to their functionalities in different modules.
                    These modules can be shifted to different files and can be
                    even managed in different packages according to their
                    features.
                </p>
                <div
                    style={{
                        fontSize: '14px',
                        marginLeft: '-18%',
                        marginRight: '-14%',
                    }}
                >
                    <Gist id="4724cfc70e85b2368afd460ebb414001" />
                </div>
                <h2 style={{ marginTop: '10%' }}> What's next? </h2>
                <p>
                    We can add persistence to our application. Till now we were
                    hardcoding objects for our application which would get lost
                    as soon as our server stops. We can prevent this by using
                    any database of our choice such as MySQL, PostgreSQL, etc.
                    or even NoSQL options such as MongoDB. We can build a UI
                    such as a web app (Kotlin now also targets JS and can help
                    create seamless web apps) or an Android app to help display
                    our data better.
                </p>
                <h2 style={{ marginTop: '10%' }}> Wrapping Up </h2>
                <p style={{ marginBottom: '10%' }}>
                    That's it! We have build our pet store very easily and in no
                    time. There a lot other features that Ktor offers that we
                    could discuss in another article. Do let me know your
                    thoughts in comments down below!
                </p>
            </div>
        </div>
    )
}
