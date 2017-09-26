import React, { Component } from 'react';

class FoodColumn extends Component {
  render() {
    const { choices, column, total, unit } = this.props;

    return (
      <div className='foodcolumn flex-box column'>
        <div className='column-title'>{column}</div>
        <div className='column-title'>{`Daily Total: ${total} ${unit}`}</div>
        <div className='column-title'>{`Weekly Total: ${total * 7} ${unit}`}</div>
        <div>
          {choices.map((choice, i) => {
            return <div key={i} className='food'>{choice}</div>
          })}
        </div>
      </div>
    );
  }
}

export default FoodColumn;
