import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon_Edit_Profile from "../images/Icon_Edit_Profile.png";
import Icon from "./Icon"
import BottomMenu from './BottomMenu'
const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),

    },
    paper: {
        paddingBottom: 5,
        width: 400,
        borderRadius: 50,
        length: 200,




    },
    list: {
        marginBottom: theme.spacing(3),

    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },



}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <Icon />

                <List className={classes.list}>


                    <ListItem button>
                        <img style={{ paddingRight: 15 }} src={Icon_Edit_Profile} alt="N/a" />
                         Edit Profile
                    </ListItem>
                    <ListItem button>
                        <img style={{ paddingRight: 15 }} src={Icon_Edit_Profile} alt="N/a" />
                         Shipping Address
                    </ListItem>
                    <ListItem button>
                        <img style={{ paddingRight: 15 }} src={Icon_Edit_Profile} alt="N/a" />
                         Wishlist
                    </ListItem>
                    <ListItem button>
                        <img style={{ paddingRight: 15 }} src={Icon_Edit_Profile} alt="N/a" />
                         Order History
                    </ListItem>
                    <ListItem button>
                        <img style={{ paddingRight: 15 }} src={Icon_Edit_Profile} alt="N/a" />
                         Track Order
                    </ListItem>
                    <ListItem button>
                        <img style={{ paddingRight: 15 }} src={Icon_Edit_Profile} alt="N/a" />
                         Cards
                    </ListItem>
                    <ListItem button>
                        <img style={{ paddingRight: 15 }} src={Icon_Edit_Profile} alt="N/a" />
                         Notifications
                    </ListItem>
                    <BottomMenu />


                </List>
            </Paper>


        </React.Fragment >
    );
}