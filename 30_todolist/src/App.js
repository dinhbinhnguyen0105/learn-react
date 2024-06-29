import { useState } from "react";
import './App.css'

function Item({ item, onRemove }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="todolist__item">
      <input
        className='item__checkbox'
        type='checkbox'
        checked={checked}
        onChange={e => {
          setChecked(e.target.checked ? true : false)
        }}
      />
      <span className='item__text' disabled={checked ? true : false}>{item}</span>
      <button
        className='item__delete-btn'
        onClick={onRemove}
      >x</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState(() => {
    const storageTodolists = JSON.parse(localStorage.getItem('todolists'));
    return Array.isArray(storageTodolists) ? storageTodolists : [];
  });
  const [item, setItem] = useState('');

  const handleOnAdd = () => {
    setItems(prev => {
      const newItems = [...prev, item];
      const jsonItems = JSON.stringify(newItems);
      localStorage.setItem('todolists', jsonItems);
      return newItems;
    });
    setItem('');
    const inputElm = document.getElementById('input-container__input');
    inputElm.focus();
  }

  const handleOnRemove = (index) => {
    setItems(() => {
      const newItems = items.filter(item => item !== items[index]);
      localStorage.setItem('todolists', JSON.stringify(newItems));
      return newItems;
    });
  }

  return (
    <div className="App">
      <div className='todolist-container'>
        <div className='todolist__title'>
          <h1>Awesome Todo list</h1>
        </div>
        <div className='todolist__input-container'>
          <input
            className='input-container__input'
            id="input-container__input"
            type='text'
            placeholder='What do you need to do today?'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            className='input-container__add-btn'
            onClick={handleOnAdd}
          >ADD</button>
        </div>
        <div className='todolist__items'>
          {
            items.map((item, index) => <Item item={item} key={index} onRemove={() => handleOnRemove(index)} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
