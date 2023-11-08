// pages/crm.js
import React from 'react';
import Header from './components/Header';
import Link from 'next/link';


export default function page() {
  return (
    <div>
    <Header/>
    <main>
      <section className="hero">
        <h1>Bienvenido al CRM Escolar</h1>
        <p>Gestiona eficazmente la información de estudiantes, padres y personal.</p>
      </section>
      <section className="features">
      <Link href="/dashboard">
        <div className="feature">
          <h2>Registro y Matrícula</h2>
          <p>Gestiona el proceso de registro y matrícula de estudiantes de manera eficiente.</p>
        </div>
      </Link> 
        <div className="feature">
          <h2>Calificaciones y Asistencia</h2>
          <p>Realiza un seguimiento del rendimiento académico de los estudiantes y su asistencia.</p>
        </div>
        <div className="feature">
          <h2>Comunicación</h2>
          <p>Mantén una comunicación efectiva con padres, estudiantes y personal.</p>
        </div>
      </section>
    </main>
  </div>
  );
};