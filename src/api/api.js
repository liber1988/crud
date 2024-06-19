import axios from "axios";

const shoeUrl = "https://6672b2cd6ca902ae11b1636f.mockapi.io/shoes";

export const getShoes = async () => {
  try {
    const response = await axios(shoeUrl);
    return response.data;
  } catch (error) {
    throw new Error("cannot fetch shoes data");
  }
};

export const addShoe = async (shoe) => {
  try {
    const response = await axios.post(shoeUrl, shoe);
  } catch (error) {
    throw new Error("Unable to add shoe to db");
  }
};

export const deleteShoe = async (shoe) => {
  try {
    const response = await axios.delete(shoeUrl + "/" + shoe.id);
  } catch (error) {
    throw new Error("Unable to delete shoe.");
  }
};

export const updateOneShoe = async (shoe) => {
  try {
    const response = await axios.put(shoeUrl + "/" + shoe.id, shoe);
  } catch (error) {
    throw new Error("Unable to delete shoe.");
  }
};
export const getOneShoe = async (id) => {
  try {
    const response = await axios(shoeUrl + "/" + id);
    return response.data;
  } catch (error) {
    throw new Error("cannot fetch shoes data");
  }
};
