import axios, { AxiosResponse } from 'axios';

import { config } from '../lib/config';
import { IAPIRequestParams } from '../types';

export const APIInstance = axios.create({
  timeout: 30000,
  baseURL: config.urls.API,
});

export const apiGet = <D>({
  url,
  baseURL,
  headers,
  responseType,
  withCredentials,
}: Omit<IAPIRequestParams, 'payload'>) => APIInstance.get<D, AxiosResponse<D>>(url, {
  baseURL,
  headers,
  responseType,
  withCredentials,
});

export const apiDelete = <D>({
  url,
  baseURL,
  headers,
  withCredentials,
}: Omit<IAPIRequestParams, 'payload'>) => APIInstance.delete<D, AxiosResponse<D>>(url, { baseURL, headers, withCredentials });

export const apiPost = <D, P>({
  url,
  payload,
  baseURL,
  headers,
  withCredentials,
}: IAPIRequestParams<P>) => APIInstance.post<D, AxiosResponse<D, P>, P>(url, payload, { baseURL, headers, withCredentials });

export const apiPatch = <D, P>({
  url,
  payload,
  baseURL,
  headers,
  withCredentials,
}: IAPIRequestParams<P>) => APIInstance.patch<D, AxiosResponse<D, P>, P>(url, payload, { baseURL, headers, withCredentials });

export const apiPut = <D, P>({
  url,
  payload,
  baseURL,
  headers,
  withCredentials,
}: IAPIRequestParams<P>) => APIInstance.put<D, AxiosResponse<D, P>, P>(url, payload, { baseURL, headers, withCredentials });
