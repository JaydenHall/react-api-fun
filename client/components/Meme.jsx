import React from 'react'
import request from 'superagent'

class Meme extends React.Component {

  state = {
    memeURL: '',
  }
  
  // componentDidMount() {
  //   this.getMemeImage()
  // }

  handleClick = () => {
    this.getMemeImage()
  }

  randomNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  getMemeImage = () => {
    request.get(' https://api.imgflip.com/get_memes')
      .then(res => {
        console.log(res.body);
        this.setState({
          memeURL: res.body.data.memes[this.randomNumber()].url,
        })
        console.log(this.state);
      })
  }
  render() {
    return (
      <>
        <h1>Meme image below</h1>
        <button onClick={this.handleClick}>Get meme</button>
        <img src={this.state.memeURL}/>
        
      </>
    )
  }
}

export default Meme