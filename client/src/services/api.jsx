// src/api/api.jsx
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://your-api-url.com/api", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// GET request example
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("GET error:", error);
    throw error;
  }
};

// POST request example
export const postData = async (endpoint, payload) => {
  try {
    const response = await api.post(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error("POST error:", error);
    throw error;
  }
};

// PUT request example
export const putData = async (endpoint, payload) => {
  try {
    const response = await api.put(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error("PUT error:", error);
    throw error;
  }
};

// DELETE request example
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("DELETE error:", error);
    throw error;
  }
};
