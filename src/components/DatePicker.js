import React, { useState } from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";


const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersDay: {
      daySelected: {
        backgroundColor: '#f09505',
      },
    },
  },
});

const DatePicker = ({ titleField }) => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <>
      <ThemeProvider theme={materialTheme}>
        <KeyboardDatePicker
          disableToolbar
          autoOk
          variant='inline'
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          InputAdornmentProps={{ position: "start" }}
          label={titleField}
          format="yyyy/MM/dd"
        />
      </ThemeProvider>
    </>
  );
}

export default DatePicker;
