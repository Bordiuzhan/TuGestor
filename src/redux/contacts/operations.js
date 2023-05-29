import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchPhones = createAsyncThunk(
  'contacts/fetchAl',
  async (_, thunkAPI) => {
    console.log('goo');
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.menssage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', userData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.menssage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (phoneId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${phoneId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.menssage);
    }
  }
);
