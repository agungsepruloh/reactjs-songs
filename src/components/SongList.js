import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

export default connect()(SongList);

// function example() {
//   return function() {
//     return console.log("Hi there!");
//   };
// }

// example()();
