import Axios from "axios";
import { BASE_URL } from "../Constants";

const getPostById = (postId) => Axios.get(`${BASE_URL}/post/${postId}`);

export { getPostById };
