import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/usuarios`);
  return response;
};

export const getUser = async (id) => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response;
};

export const createUser = async (user) => {
  const response = await axios.post(`${API_URL}/usuarios`, user);
  return response;
};

export const updateUser = async (id, user) => {
  const response = await axios.patch(`${API_URL}/usuarios/${id}`, user);
  return response;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/usuarios/${id}`);
  return response;
};
