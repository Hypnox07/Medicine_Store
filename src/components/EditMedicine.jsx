import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editMedicine } from '../features/medicines/medicineSlice';

const EditMedicine = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const medicine = useSelector((state) =>
    state.medicines.medicines.find((med) => med.id === parseInt(id))
  );

  const [name, setName] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    if (medicine) {
      setName(medicine.name);
      setStock(medicine.stock);
    }
  }, [medicine]);

  const handleEditMedicine = (e) => {
    e.preventDefault();
    dispatch(editMedicine({ id: medicine.id, name, stock }));
  };

  if (!medicine) {
    return <div className="container mt-5"><div className="alert alert-danger text-center">Medicine not found</div></div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Medicine</h2>
      <form onSubmit={handleEditMedicine} className="d-flex flex-column align-items-center">
        <div className="form-group w-100 mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Medicine Name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group w-100 mb-3">
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="Stock"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EditMedicine;
