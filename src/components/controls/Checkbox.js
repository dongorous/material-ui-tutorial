import React from "react";
import { FormControlLabel } from "@material-ui/core";

const Checkbox = ({ name, label, checked, onChange }) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    color="primary"
                    checked={checked}
                    onChange={onChange}
                    name={name}
                />
            }
            label={label}
        />
    );
};

export default Checkbox;
