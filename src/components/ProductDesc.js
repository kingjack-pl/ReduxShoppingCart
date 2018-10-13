import React, {Component} from 'react';

class ProductDesc extends Component {

    render(){
        if(!this.props.data){
            return <div>Ładowanie...</div>;
        }

        const { src, name, cat, desc, price } = this.props.data;

        return (
            <div className="productDesc">
                <img src={src} alt={name} />
                <h3>{name}</h3>
                <p>
                    Kategoria: {cat}<br/>
                    Cena: {price} zł
                </p>
                <p>Opis: {desc}</p>
            </div>
        );
    }
}

export default ProductDesc;
