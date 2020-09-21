import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';


class Inventory extends React.Component {
    static propTypes = {
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
        fishes: PropTypes.object
    }

    state = {
        uid: null,
        owner: null
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            if(user){
                this.authHandler({user});
            }
        })
    }

    authHandler = async (authData) => {
        // 1. look up the current store in the firebase database
        const store = await base.fetch(this.props.storeId, { context: this})
        // 2. claim if there is no owner
        if(!store.owner){
            await base.post(`${this.props.storeId}/owner`,{
                data: authData.user.uid
            })
        }
        // 3. set the state of the inventory component to reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({ uid: null });
    }

    render(){
        const logout = <button onClick={this.logout}>Log out!</button>

        // 1. check if they're login
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}/>
        }

        // 2. check if they aren't the owner of the store
        if(this.state.uid !== this.state.owner){
            return <div>
                <p>Sorry, you are not the owner!</p>
                {logout}
            </div>
        }

        // 3. they must be the owner
        return (
            <div className="inventory">
                <h2>inventory</h2>
                {logout}
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