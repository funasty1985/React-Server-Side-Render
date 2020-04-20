import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('My auth status is', auth)

    // the two href will send url to SSR server and  
    // proxy off to http://react-ssr-api.herokuapp.com 
    // by a get request
    // and since we want to make a fully qualified url 
    // from the browser instead of navigate between SPA 
    // react page , here we use <a> but not <Link>
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href='/api/auth/google'>Login</a>
    )

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to="/" className="brand-logo">React SSR</Link>
                <ul className='right'>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/admins">Admins</Link></li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    );
};

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);