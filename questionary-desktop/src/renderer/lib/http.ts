import { ServiceResponse, TypeServiceResponse } from 'questionary-common';

import { InitialState } from '../store/types';
import { store } from '../store/store';

class HttpService {
  private static instance: HttpService;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  private getUrl(): string {
    const state: InitialState = store.getState();
    return state.settings.urlServer;
  }

  static getInstance(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }
    return HttpService.instance;
  }

  async get<T>(endPoint: string): Promise<T> {
    const request =  await fetch(`${this.getUrl()}${endPoint}`);
    const response: ServiceResponse<T> = await request.json();
    if (response.type === TypeServiceResponse.SUCCESS) {
      return response.data
    }
    throw new Error(response.message);
  }

  async post<T>(endPoint: string, body: unknown): Promise<T> {
    const request = await fetch(`${this.getUrl()}${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const response: ServiceResponse<T> = await request.json();
    if (response.type === TypeServiceResponse.SUCCESS) {
      return response.data;
    }
    throw new Error(response.message);
  }

  async put<T>(endPoint: string, id: string, body: unknown): Promise<T> {
    const request = await fetch(`${this.getUrl()}${endPoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const response: ServiceResponse<T> = await request.json();
    if (response.type === TypeServiceResponse.SUCCESS) {
      return response.data;
    }
    throw new Error(response.message);
  }

  async delete<T>(endPoint: string, id: string): Promise<T> {
    const request = await fetch(`${this.getUrl()}${endPoint}/${id}`, {
      method: 'DELETE'
    });
    const response: ServiceResponse<T> = await request.json();
    if (response.type === TypeServiceResponse.SUCCESS) {
      return response.data;
    }
    throw new Error(response.message);
  }
}

export {
  HttpService
}