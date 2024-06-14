import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  // State variables for storing posts, error message, and loading status
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //useEffectr hook to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch blog posts from JSONPlaceholder API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // Check if response is not successful, throw error if so
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        //Parse response data into JSON format
        const data = await response.json();

        //Update posts state with fetched data
        setPosts(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        // Catch any errors that occur during the fetch process
        setError(error.message);
        setLoading(false); // Set loading to false if an error occurs
      }
    };
    // Call the fetchPosts function when components mounts
    fetchPosts();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  if (loading) {
    return <div></div>;
  }
  // Render error message if error state is not null
  if (error) {
    return (
      <div className="error-message">
        <h1>Data fetching failed</h1>
      </div>
    );
  }
  // Render posts if no error occurred
  return (
    <div className="app-container">
      <h1>Posts</h1> {/*Main heading for the blog posts*/}
      <div className="blog-posts">
        {posts.map((post, index) => (
          <div key={post.id} className="post">
            {/* Display the post title with a sequential number*/}
            <h2>
              {index + 1}.{post.title}
            </h2>
            {/* Display the post body */}
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
