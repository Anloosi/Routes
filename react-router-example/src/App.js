
import './App.css';
import React from 'react';
import {createBrowserRouter, createRoutesFromElements,
  Route, 
  Link,
   Outlet,
    RouterProvider
   } from 'react-router-dom';
import {Home} from './Components/Home';
import {About} from './Components/About';
import { Data, dataLoader } from './Components/Data';

export function App() {
  const router = createBrowserRouter (
     createRoutesFromElements (
      <Route path= "/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/data" element={<Data />} loader={dataLoader}/>
      <Route path= "/about" element={<About />}/>
      </Route>
     )
  );
  return (
    <div className="App">
        <RouterProvider router={router}/>

    </div>
  )
}


export default App;


const Root = () => {
return (
<div>
  <h1>Welcome to the App!</h1>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li> 
      <li>
        <Link to="/data">Data</Link>
      </li> 
    </ul>
  </nav>
  <Outlet /> {/* Renders the nested routes*/}
</div>

);

};