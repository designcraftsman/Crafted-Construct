import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";

const Sidebar = ({ categories, recentPosts }) => {
  // Limit recent posts to a maximum of 5
  const limitedRecentPosts = recentPosts.slice(0, 5);

  return (
    <aside className="sidebar">
      <div className="category-section mb-4 text-white">
        <h6>Category</h6>
        <hr className='border-3'/>
        <ul className="list-unstyled sidebar__categories">
          {categories.map((cat, index) => (
            <li key={index} className='fw-light mb-3 '>
              <a href="blog-v1" className='text-decoration-none sidebar__cateogires__link__hover  sidebar__categories__link'>
                <FaAngleDoubleRight /> {cat}
              </a>
            </li>
          ))}
        </ul>
        <h6>Recent Posts</h6>
        <hr className='border-3'/>
        {limitedRecentPosts.map((post, index) => (
          <div className="recent-post mb-4 d-flex align-items-center" key={index}>
            <img src={post.image} alt={post.title} className="recent-post-image me-2" />
            <div>
              <h6 className="recent-post-title m-0">{post.title}</h6>
              <div className="badge bg-info">{post.category}</div>
              <p className="post-date fs-6 opacity-75 m-0">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
