import './Header.scss';
import { Link } from 'react-router-dom';
import { FiPlusSquare } from 'react-icons/fi';

function Header() {
  return (
    <header className="Header">
      &nbsp;
      <h1 className="app-title">טרמפים חריש</h1>
      <Link className='new-ride-link' to="ride"><FiPlusSquare role="button" onClick={() => console.log('click')}/></Link>
    </header>
  )
}
export default Header;