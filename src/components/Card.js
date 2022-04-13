import React from 'react';

const Card = (props) => {
   
    return (
        <article className='card-item'>
            <img src={props.img} alt='calories'/>
            <div className='content-card'>
                <span className='title-h3 d-block'>{props.title}</span>
                <span className='text'>{props.text}</span>
            </div>
        </article>
    );
};

export default Card;