import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';

class WordConstruct extends Component {
    static propTypes = {};

    goToAdmin = () =>{

    };


    render() {
        const word = "Колобординация";
        return <div>Here will our constructor!
            <Link to={'/admin'}>
                <button >Go to AdminPanel</button>
            </Link>
            {word.split("").map(function (el, index) {
                return <div key={index}>
                    {el}
                </div>
            })}
        </div>
    }
}

export default WordConstruct;