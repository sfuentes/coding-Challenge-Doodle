import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {DateTime} from 'luxon';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function NoMessages(UserName = "No One", Message = "Nothing to see", sendDate = "2011-10-05T14:48:00.000Z") {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <Typography variant="body2" component="p">
                    I'm afraid to admit, that there no messages for you by now.
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Nothing Yet</Button>
            </CardActions>
        </Card>
    );
}
