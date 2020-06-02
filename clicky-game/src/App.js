import React, { Component } from 'react';
import DogCard from "./components/DogCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";

class App extends Component {

  state = {
    dogs
  };

  shuffledArray = array => {
    let ctr = array.length, temp, index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
    }
    return array;
  }
  
  render() {
    
    const shuffledDog = this.shuffledArray(this.props.dogs);
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {shuffledDog.map(dog =>
          <DogCard
          id={dog.id}
          key={dog.id}
          image={dog.image}
          />
          )}
      </Wrapper>
    );
  }
}

export default App;