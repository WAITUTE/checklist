import React from 'react'
import ItemList from './ItemList'

const Content = ({items,handleCheck, handleDelete}) => {
    
    /*
    const [name, setName] = useState('');
    const handleNameChange = () =>{
        const names= ['me', 'You', 'together'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
    const handleClick = () =>{
        console.log(' you clicked it')
    }
    const handleClick1 = (names) => {
        console.log(`${names} was clicked`)
        <p>It will always be {name}!</p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick1('Dave')}>click me</button>
    }*/
   
    
  return (
    <>
        {items.length ? (
            <ItemList 
                items= {items}
                handleCheck= {handleCheck}
                handleDelete ={handleDelete}
            />
        ) : (
            <p style={{marginTop: '2rem'}}>Your List Is Empty</p>
        )}
    </>
  )
}

export default Content