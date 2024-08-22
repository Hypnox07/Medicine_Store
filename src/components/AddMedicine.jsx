import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicine } from '../features/medicines/medicineSlice';
import '../css/AddMedicine.css'

const AddMedicine = () => {
  const [medicineName, setMedicineName] = useState('');
  const [stock, setStock] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Assuming auth state includes user details
  const { medicines } = useSelector((state) => state.medicines);

  const handleAddMedicine = (e) => {
    e.preventDefault();
    // Ensure user is logged in
    if (!user) {
      // Handle error or redirect to login
      return;
    }

    // Check if user has already added 5 medicines
    if (medicines.filter(medicine => medicine.userId === user.id).length >= 5) {
      alert("Your limit is 5. You cannot add more medicines.");
      return;
    }

    // Dispatch action to add medicine with userId
    dispatch(addMedicine({ name: medicineName, stock: parseInt(stock), userId: user.id }));

    // Clear input fields after adding medicine
    setMedicineName('');
    setStock('');
  };

  return (
    <>
    <div className='bg-gradient-primary '>
    <div className="container mt-5 ">
      <h2 className="text-center mb-4">Add Medicine</h2>
      <form onSubmit={handleAddMedicine} className="d-flex flex-column align-items-center bg-transparent shadow-lg p-5 rounded-2">
        <div className="form-group w-100 mb-3 ">
          <input
          
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            placeholder="Medicine Name"
            className="form-control "
            required
          />
        </div>
        <div className="form-group w-100 mb-3">
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Stock"
            className="form-control "
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddMedicine;
