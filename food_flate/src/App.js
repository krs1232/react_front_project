import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home';
import HomeDetail from "./component/HomeDetail";
import FoodShop from "./component/FoodShop";

class App extends Component {
  render() {
    return (
        <Router>
            <div className={"site"}>
              <Header/>
              <switch>
                  <Route exact path={"/"} component={Home}/>
                  <Route path={"/homeDetail/:hno"} component={HomeDetail}/>
                  <Route path={"/foodShop/:shop_name"} component={FoodShop}/>
              </switch>
              <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;