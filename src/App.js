import './App.css';
import Linegraph from './Components/Graph/Linegraph';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch, faBell, faCaretDown, faDashboard, faWallet, faDollar, faDatabase, faContactCard } from '@fortawesome/free-solid-svg-icons';
import Bargraph from './Components/Graph/Bargraph';
import Dualbargraph from './Components/Graph/Dualbargraph';
import { useEffect, useState } from 'react';
import DataTable from './Components/Graph/DataTable';
import MobileMenu from './Components/MenuItems/MobileMenu';
import { items } from './Components/Sidebar/MenuItems';

// Add the icons you need to the library
library.add(faUser, faSearch, faBell, faCaretDown, faDashboard, faWallet, faDollar, faDatabase, faContactCard);


function App() {

  const [page, setPage] = useState('Dashboard');
  const [month, setMonth] = useState('Jan');
  const [view, setView] = useState('Manage');
  const [differ, setDiffer] = useState(0.9);


  const changeView = (viewName) => {
    setView(viewName);
    if(viewName==="Manage"){setDiffer(differ+30)}else setDiffer(differ-30)
    console.log(view)
  }

  const generateRandomValue = () => {
    let random = Math.random();
    let randomNumber = 1 + random * 100;
    setDiffer(randomNumber.toFixed(3))
    console.log(differ);
  }

  const monthChange = (selectedMonth) => {
    const newMonth = selectedMonth.slice(0,3)
    console.log(newMonth)
    generateRandomValue();
    setMonth(newMonth);
  }


  const menuChange = (selection) => {
    console.log(selection.name)
    setPage(selection.name);
  }
  
  useEffect(()=>{
    console.log(page); 
    console.log("Month",month); 
    console.log(differ);
  },[page, differ, month])


  return (
    <>
     <div className='container'>
        <div className='box1'>
        <Sidebar callback={menuChange}/>
        </div>
        <div className='box2'>
        <Navbar callback={generateRandomValue}/>
        <MobileMenu items={items} callback={menuChange}/>
        <div className='graphBox'>
          <Linegraph title='Checking Account' callback={monthChange} differ={differ} callbackDiff={changeView}/>
          <Bargraph title='Invoices owned by you' barType="simple" month={month} differ={differ}/>
          <Dualbargraph title='Total cash flow' differ={differ}/>
          <DataTable title='Account Watchlist' differ={differ}/>
        </div>
        </div>
     </div>
    </>
  );
}

export default App;
