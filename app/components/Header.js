// components/Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="ruta-al-logo.svg" alt="Logo de la Institución" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Proyección</a></li>
          <li><a href="#">Aspirantes</a></li>
          <li><a href="#">Cursos</a></li>
          <li><a href="#">Profesores</a></li>
          <li><a href="#">Estudiantes</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
