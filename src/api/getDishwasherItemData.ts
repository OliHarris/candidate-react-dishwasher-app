// getDishwasherItemData.tsx
import axios from "axios";

// will see CORS error on deployment so need mocked data on live
const currentHostname = window.location.hostname;
import dishwasherItem from "../api/__mocks__/dishwasherItem.json";

const getDishwasherItemData = async (
  queryString: string | null,
  setDataLoaded: (value: boolean) => void
) => {
  try {
    if (currentHostname === "localhost") {
      const response = await axios.get(
        "https://api.johnlewis.com/mobile-apps/api/v2/products/" + queryString
      );
      console.log(response);
      const data = await response.data;
      return data;
    } else {
      const response = dishwasherItem;
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
  } finally {
    setDataLoaded(true);
  }
};
export default getDishwasherItemData;
