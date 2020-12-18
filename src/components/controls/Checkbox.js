import React from "react";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@material-ui/core";

const Checkbox = ({ name, label, value, onChange }) => {
    const convertToDefEventPara = (name, value) => ({
        target: {
            name,
            value,
        },
    });

    return (
        <FormControlLabel
            control={
                <MuiCheckbox
                    color="primary"
                    checked={value}
                    onChange={(e) =>
                        onChange(convertToDefEventPara(name, e.target.checked))
                    }
                    name={name}
                />
            }
            label={label}
        />
    );
};

export default Checkbox;
