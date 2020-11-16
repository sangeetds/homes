import './App.css';
import Header from './Header'
import About from './About'
import Project from './Project'
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Container>
                <Header />
            </Container>
            <Container style = { right } className = "right">
                <About />
                <Project />
            </Container>
        </div>
    );
}

const right = {
    float: "right",
    marginLeft: "30%"
}

export default App;
