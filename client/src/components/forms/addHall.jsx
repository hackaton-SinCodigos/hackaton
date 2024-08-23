import React, { useState } from 'react';
import styles from "../../assets/css/addHall.module.css"; // Assuming this is the correct path

const AddHall = () => {
  const [hallName, setHallName] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ hallName, capacity });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Add Hall</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="hallName" className={styles.formLabel}>Hall Name</label>
            <input
              type="text"
              id="hallName"
              className={styles.formControl}
              value={hallName}
              onChange={(e) => setHallName(e.target.value)}
              placeholder="Hall Name"
              required
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="capacity" className={styles.formLabel}>Capacity</label>
            <input
              type="number"
              id="capacity"
              className={styles.formControl}
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="Capacity"
              required
            />
          </div>
          <button type="submit" className={styles.btnPrimary}>Add Hall</button>
        </form>
      </div>
    </div>
  );
};

export default AddHall;
