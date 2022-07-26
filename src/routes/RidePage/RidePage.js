import './RidePage.scss';
import { Link, useParams } from 'react-router-dom';
import { format, isToday, isTomorrow } from 'date-fns';
import { FiChevronsLeft } from 'react-icons/fi';

function RidePage({ data }) {

  const { id } = useParams();
  const selectedRide = data.find(ride => ride.id === Number(id));

  function getDate() {
    return isToday(new Date(selectedRide.date)) ?
    'היום' :
    isTomorrow(new Date(selectedRide.date)) ?
      'מחר' :
      format(new Date(selectedRide.date), 'dd/MM/yy')
  }

  function getTime() {
    return format(new Date(selectedRide.date), 'HH:MM')
  }

  function getFacebookNameParam() {
    return (selectedRide.contact_info.facebook_name).split(' ').join('.');
  }

  return (
    <>
      {selectedRide ?
      <main className="RidePage">

          <div className="top">
            <h2 className='ride-locations'>
              {selectedRide.origin}<FiChevronsLeft />{selectedRide.destination}
            </h2>
            <div className='date-and-time'>{getDate()} {getTime()}</div>
            {selectedRide.details ? <div className='details'>{selectedRide.details}</div> : null}
          </div>

          <div className="bottom">
            <div className="driver-name">נהג/ת: {selectedRide.contact_info.name}</div>
            {selectedRide.contact_info.facebook_name ?
            <a
              className="facebook-profile btn"
              target="_blank"
              rel="noreferrer"
              href={`https://facebook.com/${getFacebookNameParam()}`}
            >
                פרופיל פייסבוק
            </a> : null}
            {selectedRide.fee ? <div className='fee'> דמי השתתפות: ₪{selectedRide.fee}</div> : null}
            <Link className='contact btn' role="button" to="contact">לתיאום</Link>
          </div>

      </main> :
      'טוען פרטי טרמפ'}
    </>
  )
}
export default RidePage;