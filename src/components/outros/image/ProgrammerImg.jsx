import { Image, StyleSheet } from "react-native";
import React from "react";
import { programmerStyles } from "../../../styles/programmer.styles";

let url = "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360";

export const ProgrammerImg = ({ largura, altura }) => {
  return (
    <Image source={{ uri: url }} style={programmerStyles(largura, altura).image} />
  );
};
