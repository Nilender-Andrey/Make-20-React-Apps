import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const nav = [
    { id: 1, name: 'People', to: '/people/' },
    { id: 2, name: 'Planets', to: '/planets/' },
    { id: 3, name: 'Starships', to: '/starships/' },
  ];

  return (
    <header className='header container-fluid'>
      <nav
        className='navbar navbar-expand-lg navbar-dark  m-auto'
        style={{ maxWidth: '30rem' }}>
        <div className='container p-0'>
          <Link className='nav-link link' to='/'>
            <span className='navbar-brand fs-2'>Star DB</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarColor02'>
            <ul className='navbar-nav ms-md-auto justify-content-evenly w-100'>
              {nav.map(({ id, name, to }) => (
                <li className='text-center fs-6 ' key={id}>
                  <span className='visually-hidden'>(current)</span>
                  <Link className='nav-link link' to={to}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
