import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch, setPagination, deleteMedicine } from '../features/medicines/medicineSlice';

const MedicineList = () => {
  const { medicines, pagination, search } = useSelector((state) => state.medicines);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const results = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMedicines(results);
    dispatch(setPagination({ currentPage: 1, totalPages: Math.ceil(results.length / 5) }));
  }, [medicines, search, dispatch]);

  const handleDelete = (id) => {
    console.log("Dispatching deleteMedicine action for ID:", id);
    dispatch(deleteMedicine(id));
  };

  const handlePageChange = (page) => {
    dispatch(setPagination({ ...pagination, currentPage: page }));
  };

  const displayedMedicines = filteredMedicines.slice(
    (pagination.currentPage - 1) * 5,
    pagination.currentPage * 5
  );

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search Medicines"
          className="form-control"
        />
      </div>
      <ul className="list-group">
        {displayedMedicines.map((medicine) => (
          <li key={medicine.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{medicine.name}</strong> - {medicine.stock} (Added at: {medicine.addedAt})
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(medicine.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="mt-4 d-flex justify-content-center">
        {Array.from({ length: pagination.totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-primary mx-1 ${pagination.currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MedicineList;
