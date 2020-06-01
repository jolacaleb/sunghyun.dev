import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


function BlogQuotes(props) {
    return (
        <blockquote>
            <p>
                <FontAwesomeIcon icon={ faLightbulb } /> <b> {props.title} </b> <br />
                {props.text}
            </p>
        </blockquote>
    )
}

export default BlogQuotes;
