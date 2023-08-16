import { useState } from 'react'
import { Form } from './Components/Form';
import { Card } from './Components/Card';
import styles from './App.module.css';


function App() {

  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState('');
  const [favoriteDrug, setFavoriteDrug] = useState('');

  const handleSubmit2 = (inputName, inputFavoriteDrug) => {
    setName(inputName);
    setFavoriteDrug(inputFavoriteDrug);
    setShowCard(true);
  };



  return (
    <div  className= {styles.appContainer}>

    <h1 className={styles.appTitle}>Dispensary</h1>

    <Form onSubmit={handleSubmit2}></Form>

    {showCard && <Card name= {name} favoriteDrug= {favoriteDrug}></Card>}
     
    </div>
  )
}

export default App
