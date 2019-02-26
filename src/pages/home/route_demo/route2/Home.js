import React from 'react';

import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home1</Link>
                    </li>
                    <li>
                        <Link to="/about">about1</Link>
                    </li>
                    <li>
                        <Link to="/topics">topics1</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}