export interface FetchOptions {
  Method?: "GET" | "POST" | "PUT" | "DELETE";
  Body?: any;
  Headers?: any;
  Signal?: any;
  Url?: string | any;
  Params?: any;
}

export default async function FetchJson(Init: FetchOptions) {
  const response = await fetch(
    (process.env.KOA_SERVICE_URL as string) + Init.Url,
    {
      method: Init.Method,
      headers: Init.Headers,
      body: Init.Body,
    }
  );

  const data = await response.json();
  if (response.ok) return data;
  throw new FetchError({
    message: response.statusText,
    response,
    data,
  });
}

export class FetchError extends Error {
  response;
  data;
  constructor({ message, response, data }: string | any) {
    super(message);
    this.name = "FetchError";
    this.response = response;
    this.data = data ?? { message: message };
    if (Error) {
      Error(this.message);
    }
  }
}
