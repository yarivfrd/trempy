import './RideCard.scss';
import { Link } from 'react-router-dom';
import { format, isToday, isTomorrow } from 'date-fns';
import { FiChevronsLeft, FiChevronLeft } from 'react-icons/fi';

function RideCard({
  id,
  origin,
  destination,
  date
}) {

  function getDateAndTime() {
    return isToday(new Date(date)) ?
    'היום' :
    isTomorrow(new Date(date)) ?
    'מחר' :
    `${format(new Date(date), 'dd/MM/yy')} ${format(new Date(date), 'HH:MM')}`;
  }

  return (
    <Link className="RideCard" to={`ride/${id}`}>
      <div className="right">
        <div className='ride-loactions'>{origin}<FiChevronsLeft />{destination}</div>
        <div className='date-and-time'>{getDateAndTime()}</div>
      </div>
      <div className="left">
        <FiChevronLeft />
      </div>
    </Link>
  )
}
export default RideCard;