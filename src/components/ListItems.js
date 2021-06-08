import React from 'react';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  decoration: {
    textDecoration: 'none',
  },
  buttonStyle: {
    background: 'linear-gradient(333deg, rgba(240,149,5,1) 0%, rgba(240,149,14,1) 100%)',
    color: 'white',
    fontFamily: 'Lato,sans-serif'
  },
  link: {
    color: '#504742'
  },
  spaceIcon: {
    paddingRight: '.2rem'
  },

})

export const MainListItems = () => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <>
      <ListItem button>
        {location.pathname === '/okr/list' ?
          <Link to="/okr/create" className={classes.decoration} >
            <Button variant="contained" className={classes.buttonStyle}>
              <AddCircleIcon className={classes.spaceIcon} />
              Crear OKR
            </Button>
          </Link>
          :
          <Link to="/okr/list" className={classes.decoration} >
            <Button variant="contained" className={classes.buttonStyle}>
              <AssignmentIcon className={classes.spaceIcon} />
              Mis OKR
            </Button>
          </Link>
        }
      </ListItem>
    </>
  )
};

export const SecondaryListItems = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/dashboard" className={clsx(classes.decoration, classes.link)}>
        <ListItem button>
          <BarChartIcon />
          <h3>Dashboard</h3>
        </ListItem>
      </Link>
      <Link to="/general" className={clsx(classes.decoration, classes.link)}>
        <ListItem button>
          <ViewModuleIcon />
          <h3>Todos los OKR</h3>
        </ListItem>
      </Link>
      <Link to="/configuration" className={clsx(classes.decoration, classes.link)}>
        <ListItem button>
          <SettingsIcon />
          <h3>Configurar notificaciones</h3>
        </ListItem>
      </Link>
    </>
  )
};