import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <header className="appHeader">Klassiki (LG Prototype)</header>
      <main className="appMain">
        <Outlet />
      </main>
    </div>
  );
}
