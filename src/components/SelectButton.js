import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import uuid from 'react-uuid'
import { OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 440,
  },
}));


const SelectButton = ({ elements, title }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <>
      <FormControl inputVariant="outlined" variant='outlined' className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          {title}
        </InputLabel>
        <Select
          input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
        >
          {elements.map(el => <MenuItem key={uuid()} value={el.value}>{el.name}</MenuItem>)}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectButton;
