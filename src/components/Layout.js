import React from 'react';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
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