import React, { Component } from 'react';
import logo from './logo.svg';

class BenefitList extends Component {
	render() {
		var {name, details} = this.props;
		return (
			<div className="Row">
                <div className="Col-2">
                    <div>
                        <img src={logo} className="App-logo" alt="" />
                    </div>
                </div>
                <div className="Col-10">
                    <div>
                        <h4>{name}</h4>
                        <p>{details}</p>
                    </div>
                </div>
            </div>
		);
	}
}

export default BenefitList;
