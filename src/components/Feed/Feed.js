import './Feed.scss';
import RideCard from "./RideCard/RideCard";

function Feed({ data }) {
  return (
    <ul className="Feed">
      {data.length ?
      data.map(ride => <RideCard
        key={ride.id}
        id={ride.id}
        origin={ride.origin}
        destination={ride.destination}
        date={ride.date}
        details={ride.details}
        fee={ride.fee}
        contact_info={ride.contact_info}
      />) :
      'אין טרפים רלוונטים ברגע זה :('
      }
    </ul>
  )
}
export default Feed;