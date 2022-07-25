import './RideContactPage.scss';
import { useParams } from 'react-router-dom';
// import { BsWhatsapp, BsFillTelephoneFill } from 'react-icons/bs';

function RideContactPage({ data }) {

  const { id } = useParams();
  const selectedRide = data.find(ride => ride.id === Number(id));

  return (
    <>
      {selectedRide ?
      <main className="RideContactPage">
        <a className='btn' href={`https://wa.me/${selectedRide.contact_info.tel}`}>
          {/* <BsWhatsapp role="button" /> */}
          הודעה
        </a>
        <a className='btn' href={`tel:${selectedRide.contact_info.tel}`}>
          {/* <BsFillTelephoneFill role="button" /> */}
          שיחה
        </a>
      </main> :
      'טוען פרטי התקשרות'}
    </>
  )
}
export default RideContactPage;