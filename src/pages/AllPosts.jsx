import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling state

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        setLoading(false);
      } else {
        setError("Failed to load posts.");
        setLoading(false);
      }
    }).catch((err) => {
      setError("An error occurred while fetching posts.");
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="text-center text-xl font-semibold text-gray-700">Loading posts...</div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="text-center text-xl font-semibold text-red-500">{error}</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id} className="p-4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
