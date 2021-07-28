import { useState } from 'react';
import Button from './components/button/Button'
import Toast from './components/toast/Toast'
import styles from './App.module.css'

function App() {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = type => {
    switch(type) {
      case 'success':
        toastProperties = {
          id: list.length+1,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c'
        }
        break;
      case 'danger':
        toastProperties = {
          id: list.length+1,
          title: 'Danger',
          description: 'This is a danger toast component',
          backgroundColor: '#d9534f'
        }
        break;
      case 'info':
        toastProperties = {
          id: list.length+1,
          title: 'Info',
          description: 'This is a info toast component',
          backgroundColor: '#5bc0de'
        }
        break;
      case 'warning':
        toastProperties = {
          id: list.length+1,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e'
        }
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  return (
    <div className={styles.root}>
      <h1>React Toast Component</h1>
      <div className={styles.buttons}>
        <Button handleClick={() => showToast('success')}>Success</Button>
        <Button handleClick={() => showToast('danger')}>Danger</Button>
        <Button handleClick={() => showToast('info')}>Info</Button>
        <Button handleClick={() => showToast('warning')}>Warning</Button>
      </div>
      <Toast toastlist={list} position="buttom-right" setList={setList} />
    </div>
  );
}

export default App;
