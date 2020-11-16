import './App.css';
import Header from './Header'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Project from './Project'
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
