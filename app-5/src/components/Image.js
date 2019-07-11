import React, {Component} from 'react';

export default class Image extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <img src={this.state.url} />
        <caption>Error 599</caption>
      </div>
    )
  }
}
