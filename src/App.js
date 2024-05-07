import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile'
// import Dialogs from './components/dialogs/Dialogs'
// import state from "./components/Data/state"
// import {BrowserRouter,  Route} from 'react-router-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">


      <header className="wrapper">

       <Header/>
       <Navbar/>
       <div className="content">
    <Routes>
    {/* <Route path='/' element= {<Profile/>}/> */}
    {/* <Route path='/' render={ ()=> <Profile postsData={props.postsData} />}/> */}

        {/* <Route path='/profile' render={ ()=> <Profile postsData={props.profilePage} />}/> */}
        <Route path='/profile' element ={<Profile postsData={props.postsData} />}/>
        {/* <Route path='/profile' element= {<Profile/>}/> */}
        {/* <Route path='/dialogs' render={ ()=> <Dialogs messagesData={props.state.messagesData} dialogsData={props.state.dialogsPage } />}/> */}
        {/* <Route path='/dialogs' element= {<Dialogs/>}/> */}
    </Routes>

       </div>
       {/* <Profile name={"Elon Masc"}/> */}
      </header>


    </div>

      </BrowserRouter>
  );
}

export default App;
