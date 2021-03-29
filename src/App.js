import React ,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; 
import Scroll from './Scroll';
import './App.css';


class  App extends Component{

constructor(){

super() 
this.state = {
robots : robots,
searchfield: ''

}

}

componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => this.setState({robots : users}))
}


onSearchChange = (event) =>{
this.setState({searchfield: event.target.value})	

	

}	

render(){
	const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
return (
<div className = 'tc'>
<h1 className='f1'>R-Buddies</h1>	
<SearchBox searchCHange = {this.onSearchChange}/> 
<Scroll>
 <CardList robots = {filteredRobots}/>
</Scroll>
</div>
);


}
}
export default App;