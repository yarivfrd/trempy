import './NewRidePage.scss';
import locations from '../../locations.json';
import { format } from 'date-fns';

function NewRidePage({
  handleSubmit,
  generalDestination,
  setGeneralDestination,
  location,
  setLocation,
  timeAndDate,
  setTimeAndDate,
  fee,
  setFee,
  name,
  setName,
  tel,
  setTel,
  details,
  setDetails
}) {
  return (
    <main className="NewRidePage">
      <h2>הצעת טרמפ חדש</h2>
      <form onSubmit={handleSubmit}>

        <div className="general-destination">
          <label>
            <input
              required
              type="radio"
              value="out"
              checked={generalDestination === "out"}
              name="general-destination"
              onChange={e => setGeneralDestination(e.target.value)}
            />
            יוצא/ת מחריש
          </label>
          <label>
            <input
              type="radio"
              value="harish"
              checked={generalDestination === "harish"}
              name="general-destination"
              onChange={e => setGeneralDestination(e.target.value)}
            />
            חוזר/ת לחריש
          </label>
        </div>

        <label>
          מאיפה/לאן?
          <select
            required
            id="locations"
            value={location}
            onChange={e => setLocation(e.target.value)}
          >
            {locations.map(location => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          מתי?
          <input
            required
            type="datetime-local"
            id="date-and-time"
            value={timeAndDate}
            min={format(new Date(), 'yyyy-MM-dd\'T\'HH:mm')}
            onChange={e => setTimeAndDate(e.target.value)}
          />
        </label>

        <label>
          שם
          <input
            required
            type="text"
            id="name"
            value={name}
            minLength="2" maxLength="30"
            pattern="[a-z A-Z\u0590-\u05fe]{2,30}"
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          טלפון
          <input
            required
            type="tel"
            id="tel"
            value={tel}
            minLength="9"
            maxLength="10"
            pattern="[0-9]{9,10}"
            onChange={e => setTel(e.target.value)}
          />
        </label>

        <label>
          דמי השתתפות
          <select
            required
            id="fee"
            value={fee}
            onChange={e => setFee(e.target.value)}
          >
            <option value="">בחר/י סכום</option>
            <option value={0}>₪0</option>
            <option value={5}>₪5</option>
            <option value={10}>₪10</option>
            <option value={15}>₪15</option>
            <option value={20}>₪20</option>
            <option value={30}>₪30</option>
            <option value={40}>₪40</option>
            <option value={50}>₪50</option>
            <option value={60}>₪60</option>
            <option value={70}>₪70</option>
            <option value={80}>₪80</option>
            <option value={90}>₪90</option>
            <option value={100}>₪100</option>
          </select>
        </label>

        <label>
          פרטים נוספים:
          <textarea
            placeholder="מיקום מדויק יותר, נקודות עצירה, מספר מקומות ברכב..."
            value={details}
            minLength="2" maxLength="400"
            onChange={e => setDetails(e.target.value)}
          />
        </label>

        <button type="submit">סיימתי</button>

      </form>
    </main>
  )
}
export default NewRidePage;