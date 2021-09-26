import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CardActions from '@material-ui/core/CardActions';

import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '45vw',
        height: '30vh',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    rating:
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
      butt:
  {
    marginTop: '16vh',
    color: grey[5],
    borderRadius: 15,
    border: '2px solid #00B337',
    width: '100%',
    height: '4vh',
    '&:hover': {
      backgroundColor: green[600],
      borderColor: green[600],
      boxShadow: 'none',
    }
  },
      textx:

  {
    width: '100%',
    height: '4vh',
 },
}));

export default function ModalPopap(props) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const {open, handleClose} = props;
      const [value, setValue] = React.useState(0);


    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
            <Grid container
          direction="column"
          justifyContent="flex-end"
          alignItems="center">

                <div style={modalStyle} className={classes.paper}>

                      <Typography className={classes.rating} component="legend">Оцените маршрут</Typography>
                      <Rating className={classes.rating}
                        
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />

                     <CardActions>
                     <TextField className={classes.textx}
                      variant="outlined"
                      multiline={true}
                        rows={6}
                      required
                      id="standard-required"
                      label="Ваш отзыв о маршруте!"
                      defaultValue=""
                    />
                    </CardActions>

                  <Button  size="medium" className={classes.butt} onClick={handleClose}>
                    Отправить
                  </Button>
                  </div>

                      </Grid>

            </Modal>
        </div>
    );
}