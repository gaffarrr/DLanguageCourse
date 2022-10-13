import { CardContent, makeStyles } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

export default function MediaCard({ image, title }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={image} title={title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}