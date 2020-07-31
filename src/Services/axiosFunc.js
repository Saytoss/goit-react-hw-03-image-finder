import axios from "axios";

const get = (query, page = 1) => {
  const key = "16429132-87648443c7058e02d90a34f5c";
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
};

export default get;
