import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import path from 'path';
import express from "express";
const app=express();

const _dirname= path.dirname("")
const buildPath= path.join(_dirname,"../build/index.html"); 

app.use(express.static(buildPath))

app.get("/",function(req,res){
  res.sendFile(
    buildPath,
    function (err){
      if(err){
        res.status(500).send(err);
      }
    }
  )
})

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
