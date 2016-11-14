import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super()
  }

  handleClick(props){
    var password = document.getElementById("password").value
    var confirmation = document.getElementById("confirmation").value

    if(password != confirmation){
      return alert("Password doesn't match")
    }else{
      return alert("Your password worked")
    }
  }

  render() {
    return (
      <div>
        <h1>Password Match</h1>
        <p><input type="text" placeholder="Email" id="email"/></p>
        <p><input type="text" placeholder="Password" id="password"/></p>
        <p><input type="text" placeholder="Password Confirmation" id="confirmation"/></p>
        <button onClick={(e) => this.handleClick(e)}>Return</button>
      </div>
    );
  }
}

export default App;
