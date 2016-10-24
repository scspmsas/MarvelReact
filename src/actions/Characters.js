import axios from 'axios';
import Crypto from 'crypto-js';
import {
  FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE, URL_MARVEL_API, API_PUBLIC_KEY, API_PRIVATE_KEY
} from '../constants';

export function fetchCharacters(offset) {
  var datasets = 'characters';
  var time = Date.now();
  var hash = Crypto.MD5(time + API_PRIVATE_KEY + API_PUBLIC_KEY);

  const request = axios({
    method: 'get',
    url: `${URL_MARVEL_API}${datasets}?limit=100&offset=${offset}&ts=${time}&apikey=${API_PUBLIC_KEY}&hash=${hash}`,
    headers: []
  });
  return {
    type: FETCH_CHARACTERS,
    payload: request
  }
}

export function fetchCharactersSuccess(characters) {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters
  };
}

export function fetchCharactersFailure(error) {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error
  };
}