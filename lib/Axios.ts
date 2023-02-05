import axios, { AxiosError, AxiosRequestConfig } from "axios";

const NextClient = axios.create({
  baseURL: process.env.NEXT_SERVICE_URL as string,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

const KoaClient = axios.create({
  baseURL: process.env.KOA_SERVICE_URL as string,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export const KoaGetter = async (url: string, option: AxiosRequestConfig) => {
  try {
    const rr = await KoaClient.get(url, option);
    return { status: true, data: rr.data };
  } catch (e) {
    ({ status: false, data: e });
    if (e instanceof AxiosError) {
      return { status: false, data: e.response?.data?.message?.data };
    }
    return { status: false, data: e };
  }
};

export const NextGetter = async (url: string, option: AxiosRequestConfig) => {
  try {
    const rr = await NextClient.get(url, option);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e instanceof AxiosError) {
      return { status: false, data: e.response?.data?.message?.data };
    }
    return { status: false, data: e };
  }
};

export const NextPoster = async (url: any, option: AxiosRequestConfig) => {
  try {
    const rr = await NextClient.post(url, option);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e instanceof AxiosError) {
      return { status: false, data: e.response?.data?.message?.data };
    }
    return { status: false, data: e };
  }
};

export const NextPutter = async (url: any, option: AxiosRequestConfig) => {
  try {
    const rr = await NextClient.put(url, option);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e instanceof AxiosError) {
      return { status: false, data: e.response?.data?.message?.data };
    }
    return { status: false, data: e };
  }
};

export const NextDelete = async (url: any, option: AxiosRequestConfig) => {
  try {
    const rr = await NextClient.delete(url, option);
    return { status: true, data: rr.data };
  } catch (e) {
    if (e instanceof AxiosError) {
      return { status: false, data: e.response?.data?.message?.data };
    }
    return { status: false, data: e };
  }
};

// export const KoaFetch = async (r: string[]) => {
//   try {
//     const rr = await KoaClient.get(...r);
//     return { status: true, data: rr.data };
//   } catch (e) {
//     if (e instanceof AxiosError) {
//       Logger({ status: false, data: e });
//       return { status: false, data: e };
//     }
//     return Logger({ status: false, data: e });
//   }
// };
