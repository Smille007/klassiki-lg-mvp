import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const MOCK_USER = { username: 'demo', password: 'klassiki' };

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      navigate('/home');
    } else {
      setError('Incorrect credentials. Try: demo / klassiki');
    }
  }, [username, password, navigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleLogin();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleLogin]);

  return (
    <div className="loginPage">
      <div className="loginCard">
        <div className="klassikiLogo" style={{fontSize:'36px', marginBottom:'24px'}}>
          <span style={{color:'#e8173a'}}>K</span>
          <span style={{color:'#f5a623'}}>L</span>
          <span style={{color:'#4a90d9'}}>A</span>
          <span style={{color:'#7ed321'}}>S</span>
          <span style={{color:'#e8173a'}}>S</span>
          <span style={{color:'#f5a623'}}>I</span>
          <span style={{color:'#4a90d9'}}>K</span>
          <span style={{color:'#7ed321'}}>I</span>
        </div>
        <h2 style={{marginBottom:'32px', fontFamily:'Arial, sans-serif', fontWeight:'400', fontSize:'20px', color:'#333'}}>Sign in to continue</h2>
        <div className="loginInputs">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="loginInput"
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="loginInput"
          />
        </div>
        {error && <p className="loginError">{error}</p>}
        <button onClick={handleLogin} className="btn" style={{width:'100%', marginTop:'8px'}}>
          Sign In
        </button>
        <p className="hint" style={{marginTop:'16px'}}>Use demo / klassiki</p>
      </div>
    </div>
  );
}
