import React, { Component } from 'react';
import Foods, { carbPercentages } from './foods';

class CarbChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carb: Foods.carbs[0],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      carb: event.target.value
    });
  }

  render() {
    const { carb } = this.state
    const { amount } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            What carbs are you going to eat?
            <select value={this.state.value} onChange={this.handleChange}>
              {
                Foods.carbs.map((carb, i) => {
                  return <option key={i} value={carb}>{carb}</option>
                })
              }
            </select>
          </label>
        </form>
        <div>
          <div>Carb Weight: {(amount/carbPercentages[carb]).toFixed(3)} grams</div>
        </div>
      </div>
    );
  }
}

export default CarbChooser;
