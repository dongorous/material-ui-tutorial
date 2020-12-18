import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Controls } from "../../components/controls/Controls";
import { useForm, Form } from "../../helpers/useForm";
import * as employeeServices from "../../services/employeeServices";

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
];

const initialValues = {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmendId: "",
    hireDate: new Date(),
    isPermanent: false,
};

const EmployeeForm = () => {
    const [values, handleOnChange] = useForm(initialValues);

    useEffect(() => {
        console.log(values, "values");
    }, [values]);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Full Name"
                        value={values.fullName}
                        name="fullName"
                        onChange={handleOnChange}
                    />
                    <Controls.Input
                        label="Email"
                        value={values.email}
                        name="email"
                        onChange={handleOnChange}
                    />
                    <Controls.Input
                        label="Mobile"
                        value={values.mobile}
                        name="mobile"
                        onChange={handleOnChange}
                    />
                    <Controls.Input
                        label="City"
                        value={values.city}
                        name="city"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleOnChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmendId"
                        label="Department"
                        value={values.departmendId}
                        onChange={handleOnChange}
                        options={employeeServices.getDepartmentCollection()}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleOnChange}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent"
                        value={values.isPermanent}
                        onChange={handleOnChange}
                    />
                    <div>
                        <Controls.Button text="Submit" type="submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            type="submit"
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
};

export default EmployeeForm;
