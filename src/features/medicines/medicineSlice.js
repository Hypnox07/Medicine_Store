import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  medicines: [],
  pagination: { currentPage: 1, totalPages: 1 },
  search: ''
};

const medicineSlice = createSlice({
  name: 'medicines',
  initialState,
  reducers: {
    addMedicine: (state, action) => {
      state.medicines.push(action.payload);
    },
    editMedicine: (state, action) => {
      const { id, name, stock } = action.payload;
      const medicine = state.medicines.find(med => med.id === id);
      if (medicine) {
        medicine.name = name;
        medicine.stock = stock;
      }
    },
    deleteMedicine: (state, action) => {
      const id = action.payload;
      state.medicines = state.medicines.filter(medicine => medicine.id !== id);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    }
  }
});

export const { addMedicine, editMedicine, deleteMedicine, setSearch, setPagination } = medicineSlice.actions;

export default medicineSlice.reducer;
