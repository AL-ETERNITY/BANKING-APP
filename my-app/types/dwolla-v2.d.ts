declare module 'dwolla-v2' {
    export class Client {
      constructor(config: {
        key: string;
        secret: string;
        environment: 'sandbox' | 'production';
      });
  
      post<T = any>(url: string, body?: any): Promise<{ body: T; headers: Headers }>;
      get<T = any>(url: string): Promise<{ body: T; headers: Headers }>;
    }
  }
  