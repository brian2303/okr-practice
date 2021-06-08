import React, { useEffect, useRef, useState } from 'react';
import { Button, Divider, FormControl, Grid, InputLabel, makeStyles, MenuItem, OutlinedInput, Select, TextField } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateOkr } from '../actions/okrActions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 440,
  },
}));

const OKRForm = ({
  userId,
  title,
  objective,
  responName,
  responEmail,
  vertical,
  description,
  dispatch
}) => {
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [inputVertical, setInputVertical] = useState('');
  const { register, watch } = useForm();

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (e) => {
    const data = {
      title: watch("title_okr"),
      vertical: inputVertical,
      responName: watch("respon_name_okr"),
      responEmail: watch("respon_email_okr"),
      description: watch("description_okr")
    }
    dispatch(updateOkr(data))
  }

  return (
    <form onChange={handleChange}>
      <h2>Crear objetivo</h2>

      <Divider style={{ marginBottom: 20 }} />
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={6} >
          <TextField
            {...register("title_okr")}
            required
            variant="outlined"
            fullWidth
            id="input_title_okr"
            label="Titulo OKR"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="input_vertical">
              Seleccionar vertical
            </InputLabel>
            <Select
              value={inputVertical}
              onChange={(e) => setInputVertical(e.target.value)}
              input={<OutlinedInput labelWidth={labelWidth} name="vertical" id="input_vertical" />}
            >
              <MenuItem value="DESARROLLO">DESARROLLO</MenuItem>
              <MenuItem value="SCRUM">SCRUM</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <h3>Responsable</h3>
      <Grid container spacing={2}  >
        <Grid item xs={6} >
          <TextField
            {...register("respon_name_okr")}
            required
            variant="outlined"
            fullWidth
            id="input_respon_okr"
            label="Nombre"
          />
        </Grid>
        <Grid item xs={5} >
          <TextField
            {...register("respon_email_okr")}
            required
            variant="outlined"
            fullWidth
            id="input_responemail_okr"
            label="Email"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={7}>
          <TextField
            {...register("description_okr")}
            id="input_description_okr"
            label="Descripcion"
            multiline
            rows="3"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 20 }} >
        <Grid item xs={4}>
          <Link to='/kr/create' style={{ textDecoration: 'none' }}>
            <Button variant="contained" style={{ fontFamily: 'Lato' }}>
              Siguiente
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = state => ({
  userId: state.okr.okr.userId,
  title: state.okr.okr.title,
  objective: state.okr.okr.objective,
  responName: state.okr.okr.responName,
  responEmail: state.okr.okr.responEmail,
  vertical: state.okr.okr.vertical,
  description: state.okr.okr.description,
})

export default connect(mapStateToProps)(OKRForm);
