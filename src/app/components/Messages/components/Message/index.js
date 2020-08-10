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
        maxWidth: 600,
        margin: '16px',
        width: 'max-content'
    },

    sendDate: {
        marginBottom: 12,
    },
});

const isCurrentUser = (currentUser, message )=>{
    return currentUser === message.author;
};

export default function Message({currentUser, message}) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h5">
                    {message.author}
                </Typography>
                <Typography variant="body1" component="p">
                   {message.content}
                </Typography>
                <Typography className={classes.sendDate} color="textSecondary">
                    {DateTime.fromISO(message.sendDate).toLocaleString(DateTime.DATETIME_FULL)}
                </Typography>
            </CardContent>
        </Card>
    );
}
