import React from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@material-ui/core";

const Select = ({ name, label, value, onChange, options }) => {
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {options.map((i) => (
                    <MenuItem key={i.id} value={i.id}>
                        {i.title}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
