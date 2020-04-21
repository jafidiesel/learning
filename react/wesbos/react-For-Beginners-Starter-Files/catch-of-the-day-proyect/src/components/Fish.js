import React from 'react';
import PropTypes from "prop-types";
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image : PropTypes.string,
            name : PropTypes.string,
            descstatus : PropTypes.string,
        }),
        addToOrder: PropTypes.func,
    }
    render(){
        const {image, name, price, desc, status} = this.props.details;
        const isAvalible = status === 'available';
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvalible} onClick={() => {this.props.addToOrder(this.props.index)}} > {isAvalible ? "Add To Order" : "Sold Out!"} </button>
            </li>
        );
    }
}

export default Fish;