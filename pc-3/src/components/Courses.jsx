import React from 'react';
import { Link, Outlet } from 'react-router';
const Courses = () => {
  return (
    <main style={coursePageStyle}>
      <div className="sale">
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
        <p>Sale is Live!!!</p>
      </div>
      <h1 style={{ textAlign: 'center', fontSize: '42px', marginTop: '40px', color: '#111827' }}>Courses</h1>
      <p style={{ textAlign: 'center', color: '#6b7280', marginTop: '8px' }}>Select a course to view its details.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', margin: '28px 0', flexWrap: 'wrap' }}>
        <Link to="/courses" style={buttonStyle}>All Courses</Link>
        <Link to="/courses/kodr" style={buttonStyle}>Kodr</Link>
        <Link to="/courses/kodex" style={buttonStyle}>Kodex</Link>
      </div>
      <Outlet />
    </main>
  );
};

const coursePageStyle = {
  minHeight: 'calc(100vh - 72px)',
  background: '#f3f4f6',
  paddingBottom: '60px',
};

const buttonStyle = {
  padding: '10px 18px',
  borderRadius: '6px',
  background: '#2563eb',
  color: 'white',
  textDecoration: 'none',
};

export default Courses;
