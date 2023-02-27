import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {mode:'light'}
      this.onchange = this.onchange.bind(this)
  }
  onchange() {
    console.log("this.state.mode",this.state)
    if(this.state.mode === 'light'){
      this.setState({mode:'dark'})
      document.body.style.color ='white'
      document.body.style.backgroundColor = '#666a70';
    }
    else{
      this.setState({mode:'light'})
      document.body.style.color ='black'
      document.body.style.backgroundColor ='white'
    }
  }
  pageSize = 6;
  render() {
    return (
      <div >
        {/* <News pageSize={6} category="business"/>
         */}
        <Router>
          <Navbar mode = {this.state.mode} onChange={this.onchange} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  keys="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  keys="/business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  keys="/entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  keys="/health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  keys="/science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  keys="/sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  keys="/sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
