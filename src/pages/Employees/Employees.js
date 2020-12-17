import React from "react";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const Employees = () => {
    const classes = useStyles();
    return (
        <div>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={<PeopleOutlineIcon fontSize="large" />}
            />
            <Paper elevation={0} square className={classes.pageContent}>
                <EmployeeForm></EmployeeForm>
            </Paper>
        </div>
    );
};

export default Employees;
