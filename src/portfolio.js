import "./App.css";
import Header from "./components/Header";
import About from "./components/About.js";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import KtorBlog from "./components/KtorBlog";
import Project from "./components/Project";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router baseName="/home">
			<div>
				<div>
					<Header />
				</div>
				<div className="right">
					<Switch>
						<Route path="/ktor-rest-api">
							<KtorBlog />
						</Route>
						<Route path="/projects">
							<Project />
						</Route>
						<Route path="/blog">
							<Blog />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/">
							<About />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
