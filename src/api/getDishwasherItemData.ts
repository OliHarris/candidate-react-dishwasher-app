// getDishwasherItemData.tsx
import axios from "axios";

const getDishwasherItemData = async (
  queryString: string | null,
  setDataLoaded: (value: boolean) => void
) => {
  try {
    const response = await axios.get(
      "https://api.johnlewis.com/mobile-apps/api/v2/products/" + queryString
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
export default getDishwasherItemData;
