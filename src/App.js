import './App.css';
import { Route, Routes  } from 'react-router-dom'
import AllMeetUpsPage from './pages/AllMeetups';
import NewMeetUpPage from './pages/NewMeetup';
import FavoritesMeetupsPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigations';


function App() {
  return (

    <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<AllMeetUpsPage/>}/>
        <Route path='/new-meetup' element={<NewMeetUpPage/>}/>
        <Route path='/favorites' element={<FavoritesMeetupsPage/>}/>
      </Routes>
    </div>

  );
}

export default App;
