import React, { Component } from "react";
import { Image } from "react-native";
import { programmerStyles } from "../../../styles/programmer.styles";

let url = "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360";

export class ProgrammerImgClass extends Component {
  render() {
    return (
      <Image
        source={{ uri: url }}
        style={programmerStyles("100%", "100%").image}
      />
    );
  }
}
