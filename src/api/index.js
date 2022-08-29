import axios from 'axios'

const url = 'https://be-inspired-project.herokuapp.com/quotes'

export const fetchQuotes = () => axios.get(url)
export const createQuote = (newQuote) => axios.post(url, newQuote)