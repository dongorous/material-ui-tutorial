import React from "react";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Datepicker = ({ name, label, value, onChange }) => {
    const convertToDefEventPara = (name, value) => ({
        target: {
            name,
            value,
        },
    });
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disablePast
                variant="inline"
                inputVariant="outlined"
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={(data) => onChange(convertToDefEventPara(name, data))}
            />
        </MuiPickersUtilsProvider>
    );
};

export default Datepicker;
