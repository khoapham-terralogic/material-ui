import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100vh"
    },
    imgContainer: {
        width: "100%",
        height: "100%",
    },
    img: {
        width: "100%",
        maxHeight: "60vh"
    }
})

const MySilder = () => {
    const classes = useStyles()
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider className={classes.root} {...settings}>
            <div className={classes.imgContainer}>
                <img className={classes.imgContainer} src="/images/731739.png" alt="myImg" />
            </div>
            <div className={classes.imgContainer}>
                <img className={classes.img} src="/images/736451.png" alt="myImg" />
            </div>
            <div className={classes.imgContainer}>
                <img className={classes.img} src="/images/736462.png" alt="myImg" />
            </div>
            <div className={classes.imgContainer}>
                <img className={classes.img} src="/images/737491.png" alt="myImg" />
            </div>
        </Slider>
    );
}

export default MySilder