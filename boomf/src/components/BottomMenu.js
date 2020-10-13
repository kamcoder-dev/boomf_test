import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';


const useStyles = makeStyles({
    root: {
        width: 400,
        height: 80
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            style={{ borderRadius: 25 }}
        >
            <BottomNavigationAction icon={<RestoreIcon />} />
            <BottomNavigationAction label="Cart" />
            <BottomNavigationAction label="Account" />
        </BottomNavigation>
    );
}