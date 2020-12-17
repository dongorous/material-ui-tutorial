import { makeStyles } from "@material-ui/core";
import { useState } from "react";

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return [values, handleOnChange];
};

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormControl-root": {
            width: "80%",
            margin: theme.spacing(1),
        },
    },
}));

export const Form = ({ children }) => {
    const classes = useStyles();
    return (
        <form className={classes.root} autoComplete="off">
            {children}
        </form>
    );
};
