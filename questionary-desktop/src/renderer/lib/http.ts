import { api } from '../config/constants';

class HttpService {
  private static instance: HttpService;
  private url: string;

  private constructor() {
    this.url = api.URL;
  }

  static getInstance(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }
    return HttpService.instance;
  }

  async get(endPoint: string) {
    try {
      const request =  await fetch(`${this.url}${endPoint}`);
      const data = await request.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async post(endPoint: string, body: any) {
    try {
      const request = await fetch(`${this.url}${endPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await request.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async put(endPoint: string, id: string, body: any) {
    try {
      const request = await fetch(`${this.url}${endPoint}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await request.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(endPoint: string, id: string) {
    try {
      const request = await fetch(`${this.url}${endPoint}/${id}`, {
        method: 'DELETE'
      });
      const data = request.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export {
  HttpService
}