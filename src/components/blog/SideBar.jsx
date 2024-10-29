import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import postsData from '../../data/blog/posts.json'; // Import the JSON data
import { Badge } from 'react-bootstrap'; // Import only Badge from React-Bootstrap

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const Sidebar = ({ categories }) => {
  const [loadedRecentPosts, setLoadedRecentPosts] = useState([]);

  useEffect(() => {
    const loadRecentPostsImages = async () => {
      const postsWithImages = await Promise.all(
        postsData.recentPosts.slice(0, 5).map(async (post) => ({
          ...post,
          image: await importImage(post.image)
        }))
      );
      setLoadedRecentPosts(postsWithImages);
    };

    loadRecentPostsImages();
  }, []);

  return (
    <aside className="sidebar">
      <div className="category-section mb-4 text-white">
        <h6>Category</h6>
        <hr className='border-3'/>
        <ul className="list-unstyled sidebar__categories">
          {categories.map((cat, index) => (
            <li key={index} className='fw-light mb-3 '>
              <a href="blog-v1" className='text-decoration-none sidebar__cateogires__link__hover sidebar__categories__link'>
                <FaAngleDoubleRight /> {cat}
              </a>
            </li>
          ))}
        </ul>
        <h6>Recent Posts</h6>
        <hr className='border-3'/>
        {loadedRecentPosts.map((post, index) => (
          <div className="recent-post mb-4 d-flex align-items-center" key={index}>
            <img src={post.image} alt={post.title} className="recent-post-image me-2" />
            <div>
              <h6 className="recent-post-title m-0">{post.title}</h6>
              <Badge bg="info">{post.category}</Badge>
              <p className="post-date fs-6 opacity-75 m-0">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
