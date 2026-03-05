import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="klassikiLogo">
          <span>K</span><span>L</span><span>A</span><span>S</span><span>S</span><span>I</span><span>K</span><span>I</span>
        </div>
      </header>
      <main className="appMain">
        <Outlet />
      </main>
    </div>
  );
}
