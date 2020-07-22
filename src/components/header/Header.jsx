import React from 'react';
import { AppBar, Toolbar, makeStyles, IconButton, Typography, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// import blue from '@material-ui/core/colors/blue'


const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        flexGrow: 1,
        background: "linear-gradient(90deg, rgba(120,15,69,0.7) 0%, rgba(12,21,168,1) 24%, rgba(154,0,255,1) 59%, rgba(112,0,185,1) 100%)"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = ({ onClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" className={classes.title}>
                        Ban hang da cap, thich thi mua con khong thich thi mua
          </Typography>
                    <Avatar alt="Trandan on the go" src="/images/trandan.jpg" />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
