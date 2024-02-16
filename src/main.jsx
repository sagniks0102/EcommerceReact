import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import SingleProduct from './pages/home/SingleProduct.jsx';
import Jewelry from './pages/itemPages/Jewelry.jsx';
// import Clothing_Shoes from './pages/itemPages/Clothing.jsx';
import Clothing from './pages/itemPages/Clothing.jsx';
import HomeLiving from './pages/itemPages/HomeLiving.jsx';
import ArtCollectibles from './pages/itemPages/ArtCollectibles.jsx';
import CraftSuppliesTools from './pages/itemPages/CraftSuppliesTools.jsx';
import WeddingParty from './pages/itemPages/WeddingParty.jsx';
import ToysEntertainment from './pages/itemPages/ToysEntertainment.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Login/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop/:id",
        element: <SingleProduct/>
      },
      {
        path:"/jewelry",
        element: <Jewelry/>
      },
      {
        path:"/clothing",
        element: <Clothing/>
      }
      ,
      {
        path:"/homeliving",
        element: <HomeLiving/>
      },
      {
        path:"/artCollectibles",
        element: <ArtCollectibles/>
      },
      {
        path:"/craftSuppliesTools",
        element: <CraftSuppliesTools/>
      },
      {
        path:"/weddingParty",
        element: <WeddingParty/>
      },
      {
        path:"/toysEntertainment",
        element: <ToysEntertainment/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/signup",
        element: <Signup/>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
