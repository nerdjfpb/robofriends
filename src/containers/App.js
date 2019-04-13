import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './app.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchfield: state.searchfield 
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response =>response.json())
            .then(users => this.setState({ robots: users }));    
    }

    render(){
        const { searchfield, onSearchChange } = this.props;
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !this.state.robots.length ?
             <h1 className='tc'>Loading</h1>
        :
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={ onSearchChange } />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={ filteredRobots } />
                        </ErrorBoundry>
                    </Scroll>
                </div>  
            );   
    }
    
}
export default connect(mapStateToProps, mapDispatchTopProps)(App);
