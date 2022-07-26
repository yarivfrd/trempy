import { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home/Home';
import RidePage from './routes/RidePage/RidePage';
import RideContactPage from './routes/RideContactPage/RideContactPage';
import NewRidePage from './routes/NewRidePage/NewRidePage';

function App() {

  const navigate = useNavigate();

  const API_URL = 'https://trempy.herokuapp.com/data';
  const [data, setData] = useState({});

  // new ride form state
  const [generalDestination, setGeneralDestination] = useState("");
  const [location, setLocation] = useState("");
  const [timeAndDate, setTimeAndDate] = useState("");
  const [fee, setFee] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(API_URL)
      .then(res => res.json())
      .then(resData => setData(resData.rides));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newRide = {
      origin: generalDestination === 'out' ? 'חריש' : location,
      destination: generalDestination === 'out' ? location : 'חריש',
      date: timeAndDate,
      details: details,
      fee: fee,
      contact_info: {
          name: name,
          tel: tel,
          // facebook_name: "yariv fruend"
      }
  }

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRide)
    })
    .then(res => res.json())
    .then(resData => {
      clearNewRideForm();
      setData(resData.rides);
      navigate('/');
    });
  }

  function clearNewRideForm() {
    setGeneralDestination('');
    setLocation('');
    setTimeAndDate('');
    setFee('');
    setName('');
    setTel('');
    setDetails('');
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home data={data} />} />
        <Route path="ride">
          <Route
            index
            element={<NewRidePage
              handleSubmit={handleSubmit}
              generalDestination={generalDestination}
              setGeneralDestination={setGeneralDestination}
              location={location}
              setLocation={setLocation}
              timeAndDate={timeAndDate}
              setTimeAndDate={setTimeAndDate}
              fee={fee}
              setFee={setFee}
              name={name}
              setName={setName}
              tel={tel}
              setTel={setTel}
              details={details}
              setDetails={setDetails}
              />
            }
          />
          <Route path=":id">
            <Route index element={<RidePage data={data} />} />
            <Route path="contact" element={<RideContactPage data={data} />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
