import { CHARACTERS } from '../data/characters'

// --- Swap point for backend integration -----------------------------------
// Once the Express + MongoDB API exists, replace the body of each function
// below with an axios call, e.g.:
//
//   import axios from 'axios'
//   const API = import.meta.env.VITE_API_URL
//   export const getCharacters = () => axios.get(`${API}/characters`).then(r => r.data)
//
// Every component already calls these functions, so nothing else changes.
// ----------------------------------------------------------------------------

export const getCharacters = async () => {
  return Promise.resolve(CHARACTERS)
}

export const getCharacterById = async (id) => {
  return Promise.resolve(CHARACTERS.find((c) => c.id === id))
}
