import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import axios, { AxiosRequestConfig } from 'axios';

const Interceptor = () => {

    useEffect(() => {
      const handleInterceptedRequest = (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
        console.log('Intercepted Request:', config);
        // Perform any required operations on the intercepted request
  
        // Modify the config if needed
        // For example, adding a custom header
        config.headers['X-Custom-Header'] = 'Custom Value';
        console.log("Request headers after adding cookie:", config.headers);

        return config;
      };
  
      // Add an interceptor to intercept requests
      const interceptor = axios.interceptors.request.use(handleInterceptedRequest as any);
  
      return () => {
        // Clean up the interceptor when the component is unmounted
        axios.interceptors.request.eject(interceptor);
      };
    }, []);
  
    return <></>;
  };
  
  export default Interceptor;