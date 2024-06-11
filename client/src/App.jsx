import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from 'react';

import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Main/homepage";
import { NavLink } from "react-router-dom";
import MyList from "./components/Main/mylist";
import Interface from "./components/interface";

function App() {
	const user = localStorage.getItem("token");
	const [myList, setMyList] = useState([]);
	const [modalData, setModalData] = useState(null);

	const handleWatchNow = () => {
		if (modalData && modalData.youtubeUrl) {
		  window.open(modalData.youtubeUrl, '_blank');
		}
	  };
	

  const addToList = (item) => {
    if (!myList.some(listItem => listItem.title === item.title)) {
      setMyList([...myList, item]);
    }
  };


	return (
		<div>
		<Routes>
			{user && <Route path="/" exact element={<Home addToList={addToList}/>} />} 
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/mylist" element={<MyList items={myList}/>}/>
		</Routes>
		</div>
	);
}

export default App;
