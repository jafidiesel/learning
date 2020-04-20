import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from "../helpers";

class StorePicker extends React.Component{
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }
    
    goToStore = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const storeName = this.myInput.current.value;
        // 3. change the page to /store/input-value
        this.props.history.push(`/store/${storeName}`);

    };

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore} >
                <h2>Please enter a store</h2>
                <input ref={this.myInput}  type="text" required placeholder="Store name" defaultValue={getFunName()}/>
                <button type="submit">Visit store -></button>
            </form>
        )
    }
}

export default StorePicker;