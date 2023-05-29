// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import "../style/main.css";
import Home from '../pages/Home'
import Trending from '../pages/Trending'
import Filters from '../pages/Filters'
import Admin from '../pages/Admin'
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FilterIcon from '@mui/icons-material/Filter';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';



function Navbar(){
	return (
      <Router>
		<header>
			<img className='logo' src="https://mondaymorning.nitrkl.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_full_black.cc4fb00c.png&w=1920&q=75" alt="" />
			<input type="text" placeholder="Search an article" />
				<div>
				<HomeIcon/>
				<a href="/home">Home</a>
				</div>

				<div>
				<TrendingUpIcon/>
				<a href="/trending">Trending</a>
				</div>

				<div>

				<FilterIcon/>
				<a href="/filters">Filter</a>
				</div>

				<div>
				<AdminPanelSettingsIcon/>
				<a href="/admin">Admin</a>
				</div>
		</header>
		
			<Routes>

				<Route path="/home" exact Component={Home}/>
				<Route path="/trending" exact Component={Trending}/>
				<Route path="/filters" exact Component={Filters}/>
				<Route path="/admin" exact Component={Admin}/>
			</Routes>
			
		
	  </Router>
				
	);
	}

export default Navbar;