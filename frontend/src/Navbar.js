import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Users } from './pages/Users';
import { Travels } from './pages/Travels';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

export default function NavBar(props) {

    const { isUserLoggedIn, userAuthentication, currentUser, userType } = props;

    return (
        <div>
            {
                isUserLoggedIn ? (
                    userType === 'client' ? (
                        <BrowserRouter>
                            <div className="App container">
                                <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                                    <ul className="navbar-nav">
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/home">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/about">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/contact">
                                                Contact
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <Link className="btn btn-light btn-outline-primary" onClick={() => userAuthentication('','client')}>
                                                Log Out
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                                <Switch>
                                    <Route path='/home'
                                        render={(props) => {
                                            return <Home {...props} isUserLoggedIn={isUserLoggedIn} currentUser={currentUser} />
                                        }}
                                        exact />
                                    <Route path='/about' component={About} />
                                    <Route path='/contact' component={Contact} />
                                </Switch>
                            </div>
                        </BrowserRouter>
                    ) :
                        <BrowserRouter>
                            <div className="App container">
                                <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                                    <ul className="navbar-nav">
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/home">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/about">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/contact">
                                                Contact
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/users">
                                                Users
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <NavLink className="btn btn-light btn-outline-primary" to="/travels">
                                                Travels
                                            </NavLink>
                                        </li>
                                        <li className="nav-item- m-1">
                                            <Link className="btn btn-light btn-outline-primary" onClick={() => userAuthentication('','client')}>
                                                Log Out
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                                <Switch>
                                    <Route path='/home'
                                        render={(props) => {
                                            return <Home {...props} isUserLoggedIn={isUserLoggedIn} currentUser={currentUser} />
                                        }}
                                        exact />
                                    <Route path='/about' component={About} />
                                    <Route path='/contact' component={Contact} />
                                    <Route path='/users' component={Users} />
                                    <Route path='/travels' component={Travels} />
                                </Switch>
                            </div>
                        </BrowserRouter>
                ) :
                    <BrowserRouter>
                        <div className="App container">
                            <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                                <ul className="navbar-nav">
                                    <li className="nav-item- m-1">
                                        <NavLink className="btn btn-light btn-outline-primary" to="/home">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item- m-1">
                                        <NavLink className="btn btn-light btn-outline-primary" to="/about">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item- m-1">
                                        <NavLink className="btn btn-light btn-outline-primary" to="/contact">
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className="nav-item- m-1">
                                        <NavLink className="btn btn-light btn-outline-primary" to="/register">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item- m-1">
                                        <NavLink className="btn btn-light btn-outline-primary" to="/login">
                                            Login
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>

                            <Switch>
                                <Route path='/home'
                                    render={(props) => {
                                        return <Home {...props} isUserLoggedIn={isUserLoggedIn} currentUser={currentUser} />
                                    }}
                                    exact />
                                <Route path='/about' component={About} />
                                <Route path='/contact' component={Contact} />
                                <Route path='/register'
                                    render={(props) => {
                                        return <Register {...props} userAuthentication={userAuthentication} />
                                    }}
                                    exact />
                                <Route path='/login'
                                    render={(props) => {
                                        return <Login {...props} userAuthentication={userAuthentication} />
                                    }}
                                    exact />
                            </Switch>
                        </div>
                    </BrowserRouter>
            }
        </div>
    )

}