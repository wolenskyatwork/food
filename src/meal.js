import React, { Component } from 'react';

class Meal extends Component {
  render() {
    const {
      number,
      amounts,
      hourRange,
    } = this.props;

    return (
      <div className='Meal flex-box column sixth'>
        <h3>{`meal#${number}`}</h3>
        <h4>{`${hourRange[0]} - ${hourRange[1]}`}</h4>
        <div>
          <div>
            <div>{`Protein: ${amounts.protein} ounces`}</div>
          </div>

          <div>
            <div>{`Veggies: ${amounts.veggies} handfuls`}</div>
          </div>

          <div>
            <div>{`Fat: ${amounts.fat} serving`}</div>
          </div>

          <div>
            <div>{`Carbs: ${amounts.carbs} grams`}</div>
          </div>

          <div>
            <div>{`Workout carbs: ${amounts.workoutCarbs} grams`}</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Meal;
