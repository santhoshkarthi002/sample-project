/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/axios";
import React, { useCallback, useEffect } from "react";

export interface UseGetDataProps {
  url: string;
  isEnabled?: boolean;
  pathParams?: Record<string, string | number>;
  queryParams?: Record<string, string | number>;
}

interface UseGetDataResult<T> {
  data: T | null;
  loading: boolean;
  error: any | null;
  success: boolean;
  refetch: () => void;
}

function formatUrl(
  url: string,
  pathParams: Record<string, string | number> = {},
  queryParams: Record<string, string | number> = {}
): string {
  const urlWithPathParams = Object.keys(pathParams).reduce((acc, key) => {
    const value = pathParams[key];
    return acc.replace(`:${key}`, encodeURIComponent(String(value)));
  }, url);

  const queryString = new URLSearchParams(
    Object.fromEntries(
      Object.entries(queryParams).map(([key, value]) => [key, String(value)])
    )
  ).toString();

  return queryString
    ? `${urlWithPathParams}?${queryString}`
    : urlWithPathParams;
}

export const useGetData = <T>({
  url,
  isEnabled = true,
  pathParams,
  queryParams,
}: UseGetDataProps): UseGetDataResult<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState<boolean>(false);

  const formattedUrl = formatUrl(url, pathParams, queryParams);

  const fetchData = useCallback(() => {
    if (!url) return;
    setLoading(true);
    setSuccess(false);
    axiosInstance
      .get<T>(formattedUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
        setSuccess(false);
      });
  }, [url, formattedUrl]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (isEnabled) {
      fetchData();
    }
  }, [isEnabled]);

  return { data, loading, error, success, refetch };
};
