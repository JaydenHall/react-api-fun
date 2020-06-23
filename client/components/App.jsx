import React from 'react'
import request from 'superagent'
import Meme from './Meme'

class App extends React.Component {

  state = {
    setUp: '',
    delivery: '',
    joke: ''
  }

  componentDidMount() {
    // this.getMyQuote()
  }

  handleClick = () => {
    this.getMyQuote()
  }

  getMyQuote = () => {
    request.get('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=racist,sexist')
      .then(res => {
        console.log(res.body);
        this.setState({
          setUp: res.body.setup,
          delivery: res.body.delivery,
          joke: res.body.joke
        })
        console.log(this.state);

      })
  }
  render() {
    return (
      <>
        <h1>Joke api test</h1>
        <button onClick={this.handleClick}>Get Joke</button>
        <p>{this.state.setUp}</p>
        <p>{this.state.delivery}</p> 
        <p>{this.state.joke}</p>
        <Meme/>
      </>
    )
  }
}
export default App
