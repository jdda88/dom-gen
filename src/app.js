/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  //new array to include a random doamin to the domain(.us.io) generator
  let dom = ["uk", "cl", "us", "io"];
  //variable to store and add as a list our generated domain
  let s1 = "";
  //nested loops for each array to generate a randon part for the domain generator
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          //empty variable wich will add the elements form the loop "+=" the "\n" creates a new line of generated domain
          s1 += pronoun[i] + adj[j] + noun[k] + "." + dom[l] + "\n";
          //console.log(pronoun[i] + adj[j] + noun[k] + "." + dom[l]);
        }
      }
    }
  }
  //we assigned were to print our generated domains and assigned the HTTP file to an id
  document.querySelector("#domGen").innerHTML = s1;
};
