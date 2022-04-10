import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton'


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom:theme.spacing(5),
    },
}))

const CardLoading = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
             <Grid
                container
                direction="row"
                justify="center"
                >
                <Grid item xs={10} sm={8} md={5}>
                    <Card>
                        <Skeleton variant="rect" animation="wave" height={200} width="100%" style={{ marginBottom: 6 }} />
                         <CardContent>
                                <React.Fragment>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={20} width="40%"/>
                                        <Skeleton animation="wave" height={10} width="30%" />
                                        <Skeleton animation="wave" height={10} width="30%" />
                                    </div>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={30} width="100%"/>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"10px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"5px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                    <div style={{marginBottom:"5px"}}>
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                        <Skeleton animation="wave" height={10} width="100%" />
                                    </div>
                                </React.Fragment>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardLoading;