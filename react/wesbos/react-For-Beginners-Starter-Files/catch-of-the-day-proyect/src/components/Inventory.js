import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';


class Inventory extends React.Component {
    static propTypes = {
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
        fishes: PropTypes.object
    }
    render(){
        return (
            <div className="inventory">
                <h2>inventory</h2>
                {Object.keys(this.props.fishes).map(key => 
                    <EditFishForm 
                        fish={this.props.fishes[key]} 
                        key={key} 
                        index={key} 
                        updateFish={this.props.updateFish} 
                    />)
                }
                <AddFishForm  addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes} >Load Sample Fishes</button>

            </div>
        );
    }
}

export default Inventory;