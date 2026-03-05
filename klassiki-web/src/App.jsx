import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <div className="klassikiLogo">
          <span style={{color:'#e8173a'}}>K</span>
          <span style={{color:'#f5a623'}}>L</span>
          <span style={{color:'#4a90d9'}}>A</span>
          <span style={{color:'#7ed321'}}>S</span>
          <span style={{color:'#e8173a'}}>S</span>
          <span style={{color:'#4a90d9'}}>I</span>
          <span style={{color:'#f5a623'}}>K</span>
          <span style={{color:'#7ed321'}}>I</span>
        </div>
      </header>
      <main className="appMain">
        <Outlet />
      </main>
    </div>
  );
}
