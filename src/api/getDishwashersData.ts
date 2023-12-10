// getDishwashersData.tsx
import axios from "axios";

const getDishwashersData = async (setDataLoaded: (value: boolean) => void) => {
  try {
    const response = await axios.get(
      "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI"
    );
    console.log(response);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    setDataLoaded(true);
  }
};
export default getDishwashersData;
