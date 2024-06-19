import { createContext, useState, useContext, useEffect } from "react";
import {
  addShoe,
  getShoes,
  deleteShoe,
  getOneShoe,
  updateOneShoe,
} from "../api/api";
import Spiner from "../components/Spiner";
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [shoe, setShoe] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchShoesData = async () => {
    setIsLoading(true);
    try {
      const data = await getShoes();
      setShoes(data);
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while fetching shoes."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShoesData();
  }, []);

  const catchShoe = async (shoe) => {
    setIsLoading(true);
    try {
      await addShoe(shoe);
      await fetchShoesData();
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while adding the shoe."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const deleteShoeData = async (shoe) => {
    setIsLoading(true);
    try {
      await deleteShoe(shoe);
      await fetchShoesData();
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while deleting the shoe."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getShoe = async (id) => {
    setIsLoading(true);
    try {
      const data = await getOneShoe(id);
      setShoes(data);
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while fetching the shoe."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updateShoe = async (shoe) => {
    setIsLoading(true);
    try {
      await updateOneShoe(shoe);
      await fetchShoesData();
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while updating the shoe."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        shoe,
        shoes,
        catchShoe,
        deleteShoeData,
        getShoe,
        updateShoe,
        errorMessage,
        isLoading,
      }}
    >
      {isLoading ? <Spiner /> : children} {/* Show spinner if loading */}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  return useContext(ApiContext);
};
