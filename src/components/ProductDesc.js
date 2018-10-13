import React from 'react';

export default (props) => {
    const { src, name, cat, desc, price } = props.data;
    return (
        <div>
            <img src={ src } />
            <h3>{ name }</h3>
            <p>
                Kategoria: { cat }<br/>
                Cena: { price }
            </p>
            <p>Opis: { desc }</p>
        </div>
    );
}