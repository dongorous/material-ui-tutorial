import React from "react";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup as MuiRadioGroup,
} from "@material-ui/core";

const RadioGroup = ({ name, label, value, onChange, items }) => {
    return (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <MuiRadioGroup row value={value} name={name} onChange={onChange}>
                {items.map((i, idx) => (
                    <FormControlLabel
                        key={idx}
                        value={i.id}
                        control={<Radio />}
                        label={i.title}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
};

export default RadioGroup;
