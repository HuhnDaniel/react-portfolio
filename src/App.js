import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <Route exact path="/react-portfolio/" component={About} />
            <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
            <Route exact path="/react-portfolio/contact" component={Contact} />
        </Router>
    );
}

export default App;
