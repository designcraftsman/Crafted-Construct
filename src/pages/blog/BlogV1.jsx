import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/blog/SideBar';
import PostCard from '../../components/blog/PostCard1';
import blogData from '../../data/blog/posts.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const { categories } = blogData;

  useEffect(() => {
    const loadBlogPosts = async () => {
      const loadedPosts = await Promise.all(
        blogData.blogPosts.map(async (post) => ({
          ...post,
          image: await importImage(post.image),
          author: {
            name: post.author,
            avatar: await importImage('images/V1/home/testimonialsSection/1.jpg') // Default avatar
          }
        }))
      );
      setBlogPosts(loadedPosts);
    };

    const loadRecentPosts = async () => {
      const loadedRecentPosts = await Promise.all(
        blogData.recentPosts.map(async (post) => ({
          ...post,
          image: await importImage(post.image)
        }))
      );
      setRecentPosts(loadedRecentPosts);
    };

    loadBlogPosts();
    loadRecentPosts();
  }, []);

  // Get the current page from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const [currentPage] = useState(pageParam ? parseInt(pageParam) : 1);

  // Pagination logic
  const postsPerPage = 6; // Number of posts per page

  // Calculate indexes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <React.Fragment>
      <div className="blog-section container-fluid my-5 py-5">
        <div className="row gap-3">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="row gap-3 mx-auto">
              {currentPosts.map((post, index) => (
                <Link key={index} to="/post-v1" className="text-decoration-none text-dark col-lg-5 col-md-10 col-10 m-auto">
                  <div className="card">
                    <PostCard
                      title={post.title}
                      description={post.description}
                      category={post.category}
                      authorName={post.author.name}
                      authorAvatar={post.author.avatar}
                      date={post.date}
                      image={post.image}
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {blogPosts.length > postsPerPage && (
              <nav aria-label="Page navigation" className="mt-5">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <Link className="page-link fs-5 fw-semibold" to={`?page=${currentPage - 1}`} aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                      <Link className="page-link fs-5 fw-semibold" to={`?page=${i + 1}`}>{i + 1}</Link>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <Link className="page-link fs-5 fw-semibold" to={`?page=${currentPage + 1}`} aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          <div className="col-lg-3 col-md-3 col-12 mx-auto">
            <Sidebar categories={categories} recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogSection;
