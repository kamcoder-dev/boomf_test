import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Ellipse from "../images/Ellipse.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },


    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,



    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={5}>
                    <div style={{ padding: 15 }} className="image">
                        <img src={Ellipse} alt="N/a" />
                    </div>
                </Grid>
                <Grid item sm={1}>
                    <h2 >Tomas Reuters</h2>
                    <h5>tomas@email.com</h5>
                </Grid>

            </Grid>
        </div >
    );
}
