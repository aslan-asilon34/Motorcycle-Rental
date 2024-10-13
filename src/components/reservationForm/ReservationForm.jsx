import React, { useState } from 'react';
import './reservationForm.css';
import Select from 'react-select';
import Modal from '../modal/Modal';

const cities = [
  { value: 'new-york', label: 'New York' },
  { value: 'los-angeles', label: 'Los Angeles' },
  { value: 'san-francisco', label: 'San Francisco' },
  { value: 'bradenton-beach', label: 'Bradenton Beach' },
  { value: 'charlottetown', label: 'Charlottetown' },
  { value: 'bankog', label: 'Bankog' },
  { value: 'Beijing', label: 'Beijing' },
];
function ReservationForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="nav">
          <div className="nav-icon">
            <i className="fas fa-bars" />
          </div>
          <div className="search-icon">
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="title">
          <h4>BOOK A TEST DRIVE </h4>
          <hr className="divider" />
          <p style={{ color: '#fff' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, blanditiis. lorem10
          </p>
        </div>
        <div className="buttons" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>

          <Select
            id="select_city"
            className="select"
            options={cities}
            value={selectedCity}
            onChange={setSelectedCity}
            placeholder="Select a City..."
            required
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: '25px',
                height: '2.7rem',
                background: '#1e90ff',
                border: 'none',
                width: '10rem',
                color: 'white',
              }),
              placeholder: (provided) => ({
                ...provided,
                color: 'white',
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: 'white',
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 100,
                width: '200px',
              }),
            }}
          />
          <button id="book_now" type="button" onClick={handleModalOpen} style={{ marginLeft: '1rem' }}>Book Now</button>
        </div>
      </div>
      {isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          <button className="cls-m-btn" type="button" onClick={handleModalClose}>X</button>
          <br />
          <Modal selectedCity={selectedCity.value} setIsModalOpen={setIsModalOpen} />
        </div>
      </div>
      )}
    </div>
  );
}

export default ReservationForm;
