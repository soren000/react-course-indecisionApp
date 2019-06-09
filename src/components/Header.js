import React from 'react';

const Header = (props) => ( // must always return a value with a paranthesis, with a div parent
    <div className="header">
        <div className="container">
            <h1 className="header_title">{props.title}</h1>
            {props.subtitle && <h2 className="header_subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);
Header.defaultProps = { // an option for making flexible components
    title: 'Indecision'
}

export default Header;