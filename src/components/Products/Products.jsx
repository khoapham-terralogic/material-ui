import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ProductCard from './Card';

const useStyles = makeStyles({
    root: {
        marginTop: "1rem"
    }
    // gridContainer: {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    // }
})

const Products = () => {
    const classes = useStyles()
    const items = [
        {
            name: "Hinata",
            img: "/images/waifu1.jpg"
        },
        {
            name: "Emilia",
            img: "/images/waifu2.jpg"
        },
        {
            name: "Sabre",
            img: "/images/waifu3.jpg"
        },
        {
            name: "Nao Tomori",
            img: "/images/waifu4.jpg"
        },
        {
            name: "Taiga",
            img: "/images/waifu5.jpg"
        },
        {
            name: "Mitsuha",
            img: "/images/waifu6.jpg"
        }
    ]
    return (
        <Grid className={classes.root} justify="center" spacing={2} container>
            {items.map((item, index) => (
                <Grid p={12} align="center" className={classes.gridContainer} key={index} item xs={12} sm={6} md={4} >
                    <ProductCard waifu={item} />
                </Grid>
            ))
            }
        </Grid>
    );
}

export default Products;
