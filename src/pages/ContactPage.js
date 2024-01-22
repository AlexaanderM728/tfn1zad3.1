import React from 'react';
import { useParams } from 'react-router-dom';
import NoFoundPage from './NoFoundPage'; // Upewnij się, że zaimportowałeś NotFoundPage

const ContactPage = () => {
  let { locale } = useParams(); 
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  if (locale === 'de') {
    return (
        <div style={centerStyle}>
            <h1>Kontaktseite für Deutschland</h1>
        </div>
    );
  } else if (locale === 'us') {
    return (
        <div style={centerStyle}>
            <h1>Contact page for US</h1>
        </div>
    );
  } else if (locale === 'pl') {
    return (
        <div style={centerStyle}>
            <h1>Strona kontaktowa dla Polski</h1>
        </div>
    );
  } else if(locale === undefined){
    return(
        <div style={centerStyle}>
             <h1>Contact Page</h1>
        </div>
    );
  } else {
    return <NoFoundPage />; // Zwróć NotFoundPage dla nieznanych tras
  }
};

export default ContactPage;
