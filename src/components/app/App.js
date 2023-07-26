import './App.css';
import { Component } from "react";
import Info from "../info/info";
import Filter from '../filter/filter';
import Search from '../search/search';
import Movelist from '../movie_list/movie_list';
import AddMovie from '../add_movie/add_movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Info />
          <div className='content'>
            <Search />
            <Filter />
          </div>
          <div className="content">
            <Movelist />
          </div>
          <div className='content'>
            <AddMovie />
          </div>
        </div>
      </div>
    );
  }
}

export default App;