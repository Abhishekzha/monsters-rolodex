import React,{Component} from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchField from './components/search-field/search-field.component.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  onSearchChange=e=>{
    this.setState({searchField:e.target.value})
  
  }


  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>(
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      
    ))

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchField  placeholder='search monster' onChange={this.onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
 
}


export default App;
