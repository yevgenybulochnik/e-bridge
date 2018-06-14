import * as React from 'react';
import axios from 'axios';
const baseUrl = process.env.API_URL

class TestRouteComponent extends React.Component<any, any> {
  state = {
    message: 'Test message',
  }

  componentDidMount() {
    axios.get('/asynctest').then( res => {
      const result = res.data.message
      this.setState({message: result})
    } )
  }

  render() {
    return(
      <div>
        <h1>Async Test</h1>
        <div>{this.state.message}</div>
      </div>
    )
  }
}


export default TestRouteComponent
