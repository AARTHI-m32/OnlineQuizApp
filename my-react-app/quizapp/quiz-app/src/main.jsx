import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import OptionsPage from "./components/OptionsPage";
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Difficulty from './components/Difficulty.jsx';
import EasyPage from './components/EasyPage.jsx';
import MediumPage from './components/MediumPage.jsx';
import HardPage from './components/HardPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/play",
        element: <OptionsPage />
    },
    {
        path: "/difficulty/:topic", 
        element: <Difficulty />
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/homePage",
        element: <Header />
    },
    {
        path: "/easy",
        element: <EasyPage />
    },
    {
        path: "/medium",
        element: <MediumPage />
    },
    {
        path: "/hard",
        element: <HardPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);