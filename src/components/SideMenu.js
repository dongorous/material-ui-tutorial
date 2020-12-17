import React from "react";
import { withStyles, makeStyles } from "@material-ui/core";

// withStyle & makeStyles

const styles = {
    sideMenu: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "320px",
        height: "100%",
        backgroundColor: "#000000",
    },
};

const SideMenu = ({ classes }) => {
    return <div className={classes.sideMenu}></div>;
};

export default withStyles(styles)(SideMenu);
