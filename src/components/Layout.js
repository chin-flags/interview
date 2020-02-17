import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#512DA8',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>

  )

}
export default Layout;