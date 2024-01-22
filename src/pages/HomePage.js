import React from 'react';



function HomeScreen() {
    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      };
  return (
    <div style={centerStyle}>
        <h1> HOME</h1>
    </div>
  );
}

export default HomeScreen;