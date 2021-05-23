import DateFnsUtils from '@date-io/date-fns';
import zhLocale from "date-fns/locale/zh-TW";
import React, { useState } from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import addYears from "date-fns/addYears";
import { format } from 'date-fns';
import './App.css';



function DateFnsLocalizationExample() {
  //const addYears = require('date-fns/addYears');
  
  const [selectedDate, handleDateChange] = useState(new Date());
  const Taiwan_Date=addYears(selectedDate,-1911);
  const nowStr = format(Taiwan_Date, 'yyy');
  //Taiwan_Date.getDate.toString

  
  return (
    <div> 
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={zhLocale}>
        <KeyboardDatePicker
          variant="inline"
          value={selectedDate}
          label="阿公店開店日選擇"
          onChange={handleDateChange}
          format={"民國"+nowStr+"年"+" - M月 - d號"}
          autoOk = "true"
          InputLabelProps={{
            shrink: true,
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>

    </div>
  );

}

export default DateFnsLocalizationExample;