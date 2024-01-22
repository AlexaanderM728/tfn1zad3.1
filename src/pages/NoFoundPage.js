import React from 'react';
import { useLocation } from 'react-router-dom';


function NoFoundPage() {
    let location = useLocation();
    const centerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      };
  return (
    <div style={centerStyle}>
        <h1>Nie znaleziono elementu: {location.pathname}</h1>
    </div>
  );
}

export default NoFoundPage
;