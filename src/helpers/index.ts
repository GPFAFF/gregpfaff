const encode = (data: { [x: string]: string | number | boolean; formName?: string; name?: string; email?: string; message?: string; "form-name"?: string; }) => Object.keys(data)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');

export default encode;
