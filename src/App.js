import './App.css';
import Header from './components/Header'
import About from './components/About.js'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Project from './components/Project'
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Container>
                <Header />
            </Container>
            <Container className = "right">
                <About />
                <Project />
                <Blog />
                <Contact />
            </Container>
        </div>
    );
}

export default App;
