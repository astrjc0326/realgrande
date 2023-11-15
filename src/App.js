import logo from './logo.svg';
  import './App.css';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import House from './components/House';
  import { useEffect, useState } from 'react';
  import {Routes,Route}  from 'react-router-dom';
  import SearchFilter from './components/SearchFilter';
  import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import axios from 'axios';
import EnquiryList from './components/EnquiryList';



  function App() {


    let [housesData,setHousesData] = useState([]);
    let [isLogin, setisLogin] = useState(false);
    let [users, setUsers] = useState([{name: 'Anny', email:'anny@gmail.com', password: 'Test123'}]);
    let [user, setUser] = useState('');
    let [id, setid] = useState(1)
    let randomID = Math.floor((Math.random()) * 9);
    // to read houses.json and send one house obj to House.js
    useEffect(() => {
      setid(randomID);
      console.log('in useEffect');
      const fetchData = async ()=>{
        // let resp =  await axios.get('http://localhost:3002/');
        let resp =  await axios.get('http://3.92.179.31:3002/');

        let data = await resp.data;
        setHousesData(data);
        // console.log('data from state');
        console.log(housesData);
        //write the data to the state so we can use it anywhere in the component


    };
      fetchData();

    },[]);


    return (
      <div className='container-fluid'>
            <Header isLogin={isLogin} user={user} setUser={setUser} setisLogin={setisLogin} />
            <SearchFilter houses={housesData} />
                <Routes>
                  <Route path='/' element= {<House houseinfo={housesData[`${id}`]}/>} />
                  <Route path='searchresults/:county' element={<SearchResults houses={housesData}/>} />
                  <Route path='searchedHouse/:id' element={<SearchedHouse houses={housesData}/>} />
                  <Route path='/signup' element={<SignUp setisLogin={setisLogin} isLogin={isLogin} users={users} setUsers={setUsers} setUser={setUser}/>} />
                  <Route path='/login' element={<Login setisLogin={setisLogin} isLogin={isLogin} users={users} setUsers={setUsers} setUser={setUser}/>} />
                  <Route path='/enquiries'  element={<EnquiryList/>}/>

                  <Route path='*' element={<PageNotFound/>} />

                </Routes>
            <Footer/>
      </div>
    );
  }


  export default App;
