import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <div
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <span style={{ textAlign: 'center', fontWeight: '400' }}>
            Counter: {this.state.count}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }}
        >
          <Button
            color="blue"
            size="small"
            onClick={e => this.setState({ count: this.state.count + 1 })}
          >
            Add 1
          </Button>
          <Button
            color="red"
            size="small"
            onClick={e => this.setState({ count: this.state.count - 1 })}
          >
            Subtract 1
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
