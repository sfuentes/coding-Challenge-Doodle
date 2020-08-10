import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {DateTime} from 'luxon';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 600,
        margin: '16px',
        width: 'max-content',

    },

    sendDate: {
        fontSize: '0.85rem',
    },

    author: {
        fontSize: '0.85rem',
    },
    contentWrap: {
        '& :last-child': {
            paddingBottom: 0
        }
    }
});


export default function Message({message}) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.contentWrap}>
                <Typography variant="h6" component="h5" className={classes.author}>
                    Sender : {message.author}
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
