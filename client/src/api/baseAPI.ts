import { API_URL } from '../consts';
import { TAPIErrorsMap, THeaders } from './types';

export class BaseAPI {
  url: string;

  constructor(url?: string) {
    const defaultUrl = url || API_URL;

    if (!defaultUrl) {
      throw new Error('URL for BE API service is not provided!');
    }
    this.url = defaultUrl;
  }

  get(route: string, headers: THeaders = {}) {
    return fetch(`${this.url}/${route}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    });
  }

  post(route: string, body = {}, headers: THeaders = {}) {
    return fetch(`${this.url}/${route}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  static handleError(result: Response, errorsMap: TAPIErrorsMap) {
    if (result.ok) {
      return;
    }
    const { status } = result;
    throw new Error(errorsMap[status] || 'Unknown error!');
  }
}
