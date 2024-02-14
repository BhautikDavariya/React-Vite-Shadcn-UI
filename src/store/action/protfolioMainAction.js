import { portfoliosActionType } from "@/constants";
import { setLoading } from "./loadingAction";

const gearToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiaWF0IjoxNzA3Nzk4NTg3LCJleHAiOjE3MDg0MDMzODd9.kOoqzoQAtg3C7scmvk59vjC_pYNRK9WRePCh0lTEvIU";

export const fetchPortfolios = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await fetch('http://192.168.29.152:3003/api/portfolios/all', {
      headers: {
        'Authorization': `Bearer ${gearToken}`,
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
    });

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      // Parse the JSON data from the response
      const responseData = await response.json();

      // Dispatch an action with the data
      dispatch({
        type: portfoliosActionType.FETCH_PORTFOLIOS,
        payload: responseData?.data?.data,
      });
    } else {
      // Handle non-successful response (e.g., 4xx or 5xx status codes)
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }

    dispatch(setLoading(false));
  } catch (error) {
    // Handle any other errors that may occur
    console.error("Error fetching portfolios:", error);
    dispatch(setLoading(false));
  }
};