import axios from "axios";

const URL = "http://localhost:8080/aadhar";

export const fetchAadharData = async (offSet, pageSize) => {
  try {
    const response = await axios.get(`${URL}`, {
      params: { offSet, pageSize },
    });
    return response.data; // Assuming the response data is in the correct format
  } catch (error) {
    console.error("Error fetching Aadhar data:", error);
    throw error;
  }
};

export const fetchAadharDataSort = async (fieldName, offSet, pageSize) => {
  try {
    const response = await axios.get(`${URL}/${fieldName}`, {
      params: { offSet, pageSize },
    });
    return response.data; // Assuming the response data is in the correct format
  } catch (error) {
    console.error("Error fetching Aadhar data:", error);
    throw error;
  }
};

export const createAadhar = async (aadhar) => {
  try {
    const response = await axios.post(URL, aadhar);
    return response.data;
  } catch (error) {
    console.error("Error creating Aadhar:", error);
    throw error;
  }
};
