import * as api from "../api";

// Action Creators
export const getQuotes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuotes();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createQuote = (quote) => async (dispatch) => {
  try {
    const { data } = await api.createQuote(quote);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
