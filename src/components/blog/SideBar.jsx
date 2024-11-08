import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import postsData from '../../data/blog/posts.json'; // Import the JSON data
import { Badge } from 'react-bootstrap'; // Import only Badge from React-Bootstrap
import { Link } from 'react-router-dom';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const Sidebar = ({ categories }) => {
  const [loadedRecentPosts, setLoadedRecentPosts] = useState([]);
  
  useEffect(() => {
    const loadRecentPostsImages = async () => {
      const postsWithImages = await Promise.all(
        postsData.blogPosts.slice(0, 3).map(async (post) => ({
          ...post,
          image: await importImage(post.image),
          date: new Date(post.date) // Convert date string to Date object
        }))
      );

      // Sort posts by date in descending order
      const sortedPosts = postsWithImages.sort((a, b) => b.date - a.date);
      setLoadedRecentPosts(sortedPosts);
    };

    loadRecentPostsImages();
  }, []);

  return (
    <aside className="sidebar">
      <div className="category-section mb-4 text-white">
        <h6>Category</h6>
        <hr className='border-3' />
        <ul className="list-unstyled sidebar__categories">
          {categories.map((cat, index) => (
            <li key={index} className='fw-light mb-3 '>
              {/* Link to filter posts by category */}
              <Link to={`/blog-v1/${cat.toLowerCase()}`} className='text-decoration-none sidebar__categories__link'>
                <FaAngleDoubleRight /> {cat}
              </Link>
            </li>
          ))}
        </ul>
        <h6>Recent Posts</h6>
        <hr className='border-3' />
        {loadedRecentPosts.map((post, index) => (
          <Link to={`/post/${post.id}`} className="recent-post mb-4 text-decoration-none d-flex align-items-center" key={index}>
            <img src={post.image} alt={post.title} className="recent-post-image me-2" />
            <div>
              <h6 className="recent-post-title m-0 fs-6 text-white">{post.title}</h6>
              <Badge bg="info">{post.category}</Badge>
              {/* Convert date object back to a readable string */}
              <p className="post-date fs-6 opacity-75 m-0 text-white">
                {post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
