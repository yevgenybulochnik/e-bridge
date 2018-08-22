import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const styles = require('./designer.sass')

import InputPane from './presentational/inputpane'

class Designer extends React.Component<any, any> {
  render() {
    return (
      <div styleName='container'>
        <InputPane title='Patient Information'>
          <TextField
          label='Patient Name'
          placeholder='Firstname Lastname'
          InputProps={{className: styles.pname}}
          />
          <TextField
          label='DOB'
          placeholder='MM/DD/YYYY'
          InputProps={{className: styles.pdob}}
          />
        </InputPane>
        <InputPane title='Clinical Information'>
          <TextField
          label='Height'
          placeholder='cm'
          InputProps={{className: styles.pheight}}
          helperText='Date'
          />
          <TextField
          label='Weight'
          placeholder='kg'
          InputProps={{className: styles.pweight}}
          helperText='Date'
          />
          <TextField
          label='Sex'
          placeholder=' '
          InputProps={{className: styles.pweight}}
          helperText='Date'
          />
          <TextField
          label='Creatinine'
          placeholder=' '
          InputProps={{className: styles.pweight}}
          helperText='Date'
          />
        </InputPane>
        <InputPane title='Chads-Vasc'>
          <FormControlLabel
            control={
              <Checkbox />
            }
            label='CHF'
          />
          <FormControlLabel
            control={
              <Checkbox />
            }
            label='Age'
          />
          <FormControlLabel
            control={
              <Checkbox />
            }
            label='Sex'
          />
          <FormControlLabel
            control={
              <Checkbox />
            }
            label='HTN'
          />
        </InputPane>
        <InputPane title='HasBled'>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
        </InputPane>
      </div>
    )
  }
}

export default CSSModules(Designer, styles)
