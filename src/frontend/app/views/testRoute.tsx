import * as React from 'react';
import axios from 'axios';

class TestRouteComponent extends React.Component<any, any> {
  state = {
    message: [] as any,
  }

  componentDidMount() {
    axios.get('/nav').then( res => {
      const result = res.data
      this.setState({message: result})
    } )
  }

  render() {
    return(
      <div>
        <h1>Async Test</h1>
      {this.state.message.map((link: any, index: number) => ( <button key={index}>{link.link}</button>
      ))}
      </div>
    )
  }
}


export default TestRouteComponent
