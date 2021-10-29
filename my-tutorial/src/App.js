import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './asset/css/bootstrap.min.css';
import Header from './components/header';
import Navigation from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';



function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;