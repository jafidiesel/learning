import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        addFish : PropTypes.func
    }

    handleChange = event => {
        // update the fish
        // 1. copy of current fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        // 2. update fish
        this.props.updateFish(this.props.index, updatedFish)
    }

    render(){
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="avalible">Fresh!</option>
                    <option value="unavalible">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc}/>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
            </div>
        )
    }
}

export default EditFishForm;