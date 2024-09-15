import React from 'react';

// import navigation data
import { navigationData } from '../data';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <ul className='flex gap-x-8'>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <p onClick={()=>navigate(item.path)}>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
