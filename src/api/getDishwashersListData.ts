// getDishwashersListData.tsx
import axios from "axios";

// will see CORS error on deployment so need mocked data on live
const currentHostname = window.location.hostname;
import dishwashersList from "../api/__mocks__/dishwashersList.json";

const getDishwashersListData = async (
  setDataLoaded: (value: boolean) => void
) => {
  try {
    if (currentHostname === "localhost") {
      const response = await axios.get(
        "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI"
      );
      console.log(response);
      const data = await response.data;
      return data;
    } else {
      const response = dishwashersList;
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
  } finally {
    setDataLoaded(true);
  }
};
export default getDishwashersListData;
