import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from "./robots"
import SearchBox from './SearchBox.js'
import './App.css'
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots :  robots,
            searchField : ""
        }
    }
    onSearchChange =  (event) =>{
        this.setState({
            searchField: event.target.value
        });
    
    }
    render(){
        const filteredList = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(
            <div className= "tc section-main">
                <h2 className="tc heading--main">RoboFriends</h2>
                <SearchBox searchChange ={this.onSearchChange} />
                <CardList  robots = {filteredList } />
            </div>
            
        )
    }
}

export default App;