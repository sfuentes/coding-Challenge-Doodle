import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import orange from '@material-ui/core/colors/orange';
import {DateTime} from 'luxon';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 600,
        right: 0,
        marginLeft: 'auto',
        background: orange[500],
        margin: '16px',
        width: 'max-content'
    },

    sendDate: {
        fontSize: '0.85rem',
        textAlign: 'right'
    },
    content: {},
    contentWrap: {
        '& :last-child': {
            paddingBottom: 0
        }
    }
});


export default function SelfMessage({message}) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.contentWrap}>
                <Typography variant="body" component="p" className={classes.content}>
                    {message.content}
                </Typography>
                <Typography className={classes.sendDate} color="textSecondary">
                    {DateTime.fromISO(message.sendDate).toLocaleString(DateTime.DATETIME_FULL)}
                </Typography>
            </CardContent>
        </Card>
    );
}
