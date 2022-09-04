import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';


const App = ()=>{

  const [searchField, setSearchField] = useState("");
  const [monsters,setMonsters] = useState([]);
  const [monsterFilter,setMonsterFilter] = useState(monsters)
  console.log(searchField,monsters);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(json => setMonsters(json))
  },[])

  useEffect(()=>{
    const filter = monsters.filter((val) => {
       return val.name.toLocaleLowerCase().includes(searchField);
    });
    setMonsterFilter(filter)
  },[monsters,searchField])

  const onSearchChange = (e) =>{
      const searchFieldString = e.target.value.toLocaleLowerCase() 
      setSearchField(searchFieldString)
      }




  return (
     <div className="App">
        <h1 className="app-title">Monsters Org</h1>
        <SearchBar
           onChangeHandler={onSearchChange}
           placeholder={"Search Monsters"}
           classname={"monster-search-box"}
        />
        <CardList filter={monsterFilter} />
     </div>
  );
}

// class App extends Component {
//   constructor(){
//     super()

//     this.state = {
//      monsters : [],
//      searchField:""
//     }
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=> res.json())
//     .then(json=> this.setState(()=>{
//       return {monsters:json}
//     },
//     ()=> console.log(this.state.monsters)));
//   }

//   onSearchChange = (e) =>{
//               const searchField = e.target.value.toLocaleLowerCase() 
//               this.setState({searchField})
//              }

//   render () {

//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;

//       const filter = monsters.filter(val=>{
//                 return val.name.toLocaleLowerCase().includes(searchField);
//               })

//     return (
//        <div className="App">
//           <h1 className='app-title'>Monsters Org</h1>
//           <SearchBar onChangeHandler={onSearchChange} placeholder={"Search Monsters"} classname={"monster-search-box"}/>
//           <CardList filter={filter} />
//        </div>
//     );
//     }
// }

export default App;
