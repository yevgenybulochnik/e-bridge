import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./patientsearchcomponent.sass')

interface PatientSearchState {

}

interface PatientSearchProps {

}

class PatientSearchComponent extends React.Component<PatientSearchProps, PatientSearchState> {
  render() {
    return (
      <div styleName='container'>Hello world!</div>
    )
  }
}

export default CSSModules(PatientSearchComponent, styles)
