import React from 'react';
import { Card, CardHeader, CardMedia, makeStyles, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles({
    root: {
        maxWidth: "28rem",
    },
    imgContainer: {
        overflow: "hidden",
        "&:hover $media": {
            cursor: "pointer",
            transform: "scale(1.3)",
        }
    },
    media: {
        height: 0,
        transition: "all ease 0.8s",
        paddingTop: '56.25%', // 16:9
    },
})

const ProductCard = ({ waifu: { name, img } }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={3}>
            <div className={classes.imgContainer}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                />
            </div>
            <CardContent>
                <Typography variant="h4" color="textSecondary" component="p">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
