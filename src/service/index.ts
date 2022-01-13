/**
 * @desc this files contains custome hook used to post and get data from server
 * @author Vikram vikben@gmail.com
 */

import { useContext, useCallback } from 'react';
import axios from 'axios';

import { AppContext } from '../context';
import { GraphData } from '../interface';

// API Base URL
const BASE_URL = 'https://konuxdata.getsandbox.com';

/**
 * Get data from server with the give url
 * @param url - api URL
 */
const fetchData = async (url: string) => {
  return await axios.get(url);
};

/**
 * Sned data to server with the give url and data
 * @param url - api URL
 * @param data - data to send to server
 */
const postData = async (url: string, data: GraphData) => {
  return await axios.post(url, data);
};

/**
 * Custome hook to get data from server
 * @param query - query for URL
 */
export const useGetData = (query: string) => {
  const { dispatch } = useContext(AppContext);

  const getData = useCallback(async () => {
    dispatch({
      type: 'LOADING',
      payload: true,
    });
    try {
      const { data } = await fetchData(`${BASE_URL}${query}`);
      dispatch({
        type: 'SET_DATA',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err,
      });
    } finally {
      dispatch({
        type: 'LOADING',
        payload: false,
      });
    }
  }, [query, dispatch]);
  return [getData];
};

/**
 * Custome hook to send data to server
 * @param url - api URL
 * @param payload - data to send to server
 */
export const usePostData = (url: string, payload: GraphData) => {
  const { dispatch } = useContext(AppContext);
  const callAPI = useCallback(async () => {
    dispatch({
      type: 'POST_LOADING',
      payload: true,
    });
    try {
      const { data } = await postData(`${BASE_URL}${url}`, payload);
      if (data.status === 'ok') {
        dispatch({
          type: 'ADD_NEW_DATA',
          payload: payload,
        });
      }
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err,
      });
    } finally {
      dispatch({
        type: 'POST_LOADING',
        payload: false,
      });
    }
  }, [url, payload, dispatch]);
  return [callAPI];
};
