import { useState, useEffect } from 'react';
//import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/serach-box.component';
import './App.css';
// whenwver there is change in value of use state  or props the whole 
// funcion render again otherwise it will not run
const App =()=>{
  const [searchfield,setsearchfield]= useState('');
  const [monster,setmonster]=useState([]);
  const [titles,settitles]= useState('');

  const [filterarray,setfilterarray]=useState(monster);
  console.log({searchfield});


// useffect me callback function me wo rakho jisse run(render) karna hai
//  kabtak jabtak second argument me dallo empty matlab only one time run karega

 useEffect(()=>{
  const filtering = monster.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchfield);
   
  })
  setfilterarray(filtering);
 },[monster,searchfield]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((tree) => setmonster(tree));
},[]);
  const onhello=(kartt) => 
  {
    console.log(kartt.target.value);
     const seao = kartt.target.value.toLocaleLowerCase();
     setsearchfield(seao);
    
  }
  const ontitles=(kartt) => 
  {
    console.log(kartt.target.value);
     const seao = kartt.target.value.toLocaleLowerCase();
     settitles(seao);
    
  }

  
  


    return (
        <div className="App">
         <h1 className='titlewa'>{titles}</h1>


        {/* <Searchbox handler={onhello} placeholder='search-monster' className='search-box'/>
        <CardList mono={filterarray} /> */}


        <Searchbox handler={onhello} 
        placeholder='search-monster' 
        className='search-box'/>

        <br/>
        <Searchbox handler={ontitles} 
        placeholder='search-name' 
        className='titles-box'/>
        
      <CardList mono={filterarray}/>
      </div>

    )
}
export default App;