import { useState } from 'react';
import Snake from './snake/Snake';
import s from './App.module.css';

function App() {
  const [name, setName] = useState('');
  const [isAuth, setAuth] = useState(false);

  return isAuth ?
    (
      <div className={s.App}>
        <div className={s.header}>
          <h1>Welcome {name}</h1>
          <button
            className={s.btn}
            onClick={() => setAuth(!isAuth)}
          >
            Exit
          </button>
        </div>
        <Snake
          color1="#008000"
          color2="#ff0000"
          backgroundColor="#ebebeb"
        />
      </div>
    ) :
    (
      <div className={s.register}>
        <label>
          <input
            className={s.input}
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button
          className={s.btn}
          onClick={() => setAuth(!isAuth)}
        >
          Enter
        </button>
      </div>
    )
}

export default App;
