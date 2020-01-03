import React from 'react';

function BlogImage(props) {
    let imgStyle = {};
    switch (props.size) {
        case `full`:
            imgStyle.width = `100%`;
            break;
        case `half`:
            imgStyle.width = `50%`;
            break;
        case `small`: 
            imgStyle.width = `25%`;
            break;
        default:
            break;
    }
    
    return (
        <div style={{"textAlign": "center"}}>
            <img src={props.src} alt={props.alt} style={imgStyle}></img><br />
            <span style={{"color": "gray", "font-weight": "bold"}}>{props.caption}</span>
        </div>
    )
}

export default BlogImage;
