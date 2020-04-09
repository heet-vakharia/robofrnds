import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox.js'
import Scroll from '../Components/Scroll'
import './App.css'
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots :  [],
            searchField : ""
        }
    }
    onSearchChange =  (event) =>{
        this.setState({
            searchField: event.target.value
        });
    
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()) 
                .then(user => this.setState({robots : user}));
    }
    render(){
        const filteredList = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
       
            if(this.state.robots.length === 0 ){
                return <h1>Loading</h1> 
            }
            else{
                return (
            <div className= "tc section-main">
                <h2 className="tc heading--main">RoboFriends</h2>
                <SearchBox searchChange ={this.onSearchChange} />
                <Scroll>
                        <CardList  robots={filteredList }/>
                </Scroll>
            </div>
           
        )
    }}
}

export default App;