
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
// import Footer from './Footer';

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header/>
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout