import React, { Component } from 'react';
import DogCard from "./components/DogCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";
import Score from "./components/Score";

class App extends Component {

  state = {
    dogs,
    clickedId: [],
    score: 0,
    goal: 5,
    status: ""
  };

  componentDidMount() {
    this.setState({ status: "Click an image to begin"})
  }

  shuffledDog = id => {

    let clickedId = this.state.clickedId;

    if (clickedId.includes(id)) {
      this.setState({ clickedId: [], score: 0, status: "Game Over" });
      return;
    }
    else {
      this.setState({ status: "You guessed correctly!"})
      clickedId.push(id);

      this.setState({ score: this.state.count + 1 })

      if (clickedId.length === this.state.goal) {
        this.setState({ status: "You Won", clickedId: [] });
        return;
      }

      this.setState({ dogs, clickedId, score: clickedId.length });

      let ctr = dogs.length, temp, index;
      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = dogs[ctr];
        dogs[ctr] = dogs[index];
        dogs[index] = temp;
      }
    }
  }

  render() {

    return (
      <Wrapper>
      <Score
        goal={this.state.goal}
        status={this.state.status}
        score={this.state.score}
      />
        <Title>Clicky Game</Title>
        {this.state.dogs.map(dog =>
          <DogCard
            shuffledDog={this.shuffledDog}
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