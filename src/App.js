import React, { Component } from 'react';
import './App.css';
import BenefitList from './BenefitList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-row">
          <div className="Row">
            <div className="Col-6">
              <div className="Details-div">
                <h2>Iranlowo.ng </h2>
                <p>This platform has to do with giving your used fashion accessories with other 
                people after you must have used it for a while, instead of disposing them in the 
                thrash. Below are the steps required:</p>
                <BenefitList name="Clothes Giveaway" details="One can upload used clothes on the 
                platform for other people to request for it."/>
                <BenefitList name="Bags Giveaway" details="One can upload used bags and shoes on the 
                platform for other people to request for it."/>
                <BenefitList name="Old Textbooks Giveaway" details="One can upload used textbooks on the 
                platform for other people to request for it."/>
              </div>
            </div>
            <div className="Col-6">
              <div>
                <h2>Sign Up</h2>
                <p>Enter your details to get started</p>
                <form action="">
                  <div>
                    <label for="email">Email</label>
                    <input type="email" placeholder="Enter your email address" name="email" required />
                  </div>
                  <div>
                    <label for="password">Password</label>
                    <input type="password" placeholder="Enter your preferred password" name="password" required />
                  </div>
                  <div>
                    <label for="repeat-password">Repeat Password</label>
                    <input type="password" placeholder="Repeat your preferred password" name="repeat-password" required/>
                  </div>
                  <button type="submit" className="signupbtn">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
