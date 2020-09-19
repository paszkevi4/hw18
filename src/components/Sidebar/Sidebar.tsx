import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/photos">Photos</NavLink>
    </div>
  );
};

export default Sidebar;
