import { useEffect, useState } from "react";
import ApiFetch from "./components/ApiFetch";

function App() {
  const [page, setPage] = useState(1);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetchPost();
  },[])

  const fetchPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
    const posts = await res.json();
    setPost(posts)
  }
  const handlePageChange = (e) =>{
    setPage(e.target.value)
  }
  const handleSubmit = () =>{
    fetchPost();
  }
  return (
    <ApiFetch data = {posts} value={page} handlePageChange={handlePageChange}  handleSubmit={handleSubmit}/>
  );
}

export default App;
