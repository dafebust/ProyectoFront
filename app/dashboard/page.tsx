import Header from '../components/Header';
import './style.css';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main>
        <section className="student-registration">
          <h2>Registro de Estudiante</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" />
            </div>

            <div className="form-group">
              <label htmlFor="edad">Edad:</label>
              <input type="number" id="edad" name="edad" />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección:</label>
              <input type="text" id="direccion" name="direccion" />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" />
            </div>

            <div className="form-group">
              <label htmlFor="padres">Representante:</label>
              <input type="text" id="padres" name="padres" />
            </div>

            <button type="submit">Registrar Estudiante</button>
          </form>
        </section>
      </main>
    </div>
  );
}
