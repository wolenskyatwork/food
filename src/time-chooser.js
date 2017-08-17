import React, { Component } from 'react';
import moment from 'moment';

class TimeChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.hourRange[0]};

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.time,
    });
  }

  handleChange(event) {
    const { handleTimeChange } = this.props;
    this.setState({value: event.target.value});

    handleTimeChange(event.target.value);
  }

  createValues() {
    const { hourRange, time } = this.props;

    const end = moment(time).add(hourRange[1] - hourRange[0], 'h');
    let choice = moment(time).subtract(15, 'm');
    const timeArray = [];

    while (choice.isSameOrBefore(end)) {
      timeArray.push(choice);
      choice = moment(choice.add(15, 'm'));
    }

    return timeArray;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What time will you actually eat this?
          <select value={this.state.value} onChange={this.handleChange}>
            {
              this.createValues().map((time, i) => {
                return <option key={i} value={time.toString()}>{time.format('h:mm a')}</option>
              })
            }
          </select>
        </label>
      </form>
    );
  }
}

export default TimeChooser;
