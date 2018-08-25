import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const styles = require('./patientsearchcomponent.sass')

import TextField from '@material-ui/core/TextField';

interface PatientSearchState {
  patientName: string;
  patientDOB: any;
}

interface PatientSearchProps {

}

class PatientSearchComponent extends React.Component<PatientSearchProps, PatientSearchState> {
  state: PatientSearchState  = {
    patientName: '',
    patientDOB: ''
  }

  handlePatientNameInput = (event: any) => {
  }

  handleDOBInput = (event: any) => {
  }

  render() {
    const { patientName, patientDOB } = this.state
    const { handleDOBInput, handlePatientNameInput } = this

    return (
      <div styleName='container'>
          <TextField
          label='Patient Name'
          placeholder='Firstname Lastname'
          InputProps={{className: styles.namelabel}}
          value={patientName}
          onChange={(e) => handlePatientNameInput(e)}
          />
          <TextField
          label='DOB'
          placeholder='MM/DD/YYYY'
          InputProps={{className: styles.doblabel}}
          value={patientDOB}
          onChange={(e) => handleDOBInput(e)}
          />
      </div>
    )
  }
}

export default CSSModules(PatientSearchComponent, styles)
