import React from 'react';
import Main from './Main';
import Topic from './Topic';
import About from './About';
import { HashRouter, Route, Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </div>
            </HashRouter>
        )
    }
}