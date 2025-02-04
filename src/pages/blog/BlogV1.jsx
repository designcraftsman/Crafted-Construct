import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import hooks for routing
import Sidebar from '../../components/blog/SideBar'; // Import Sidebar component
import PostCard from '../../components/blog/PostCard1'; // Import PostCard component
import blogData from '../../data/blog/posts.json'; // Import blog data
import { Helmet } from 'react-helmet';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default); // Dynamically import image
};

const BlogSection = () => {
  const { query = '', category = '' } = useParams(); // Default query and category to empty strings if undefined
  const [blogPosts, setBlogPosts] = useState([]); // State for blog posts
  const { categories } = blogData; // Extract categories from blog data

  useEffect(() => {
    const loadBlogPosts = async () => {
      const loadedPosts = await Promise.all(
        blogData.blogPosts.map(async (post) => ({
          ...post,
          image: await importImage(post.image), // Load post image dynamically
          author: {
            name: post.author,
            avatar: await importImage(post['author-image']) // Load author image dynamically
          }
        }))
      );

      // Filter posts based on the provided query or category
      const filteredPosts = loadedPosts.filter((post) => {
        if (query) {
          return post.title.toLowerCase().includes(query.toLowerCase());
        }
        if (category) {
          return post.category.toLowerCase() === category.toLowerCase();
        }
        return true; // Show all posts if neither query nor category is specified
      });
      

      setBlogPosts(filteredPosts); // Update state with filtered posts
    };

    loadBlogPosts(); // Load blog posts
  }, [query, category]); // Run effect when query or category changes

  // Pagination logic
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page'); // Get current page from URL
  const [currentPage] = useState(pageParam ? parseInt(pageParam) : 1); // Set current page
  const postsPerPage = 6; // Number of posts per page
  const indexOfLastPost = currentPage * postsPerPage; // Index of last post
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // Index of first post
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost); // Get current posts
  const totalPages = Math.ceil(blogPosts.length / postsPerPage); // Calculate total pages

  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Crafted Construct</title> {/* Set the page title */}
        <meta name="description" content=" Stay updated with the Crafted Construct blog, where we share insights, trends, and tips on architecture and interior design. Join us as we explore the world of design!" /> {/* Set the meta description */}
        <meta name="keywords" content=" architecture blog, interior design blog, Crafted Construct, design trends, design tips, insights on architecture, interior inspiration" />{/* Set the meta keywords */}
      </Helmet>
      <div className="blog-section container-fluid my-5 py-5">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12">
            {/* Display search result message */}
            {(query || category) && (
              <div className="search-result-message my-5">
                <h5 className='display-5 ms-lg-5 ms-3'>
                  {query && `Search results for: "${query}"`}
                  {category && !query && `Posts in category: "${category}"`}
                </h5>
              </div>
            )}
            <div className="row gap-3 mx-auto">
              {currentPosts.length === 0 ? (
                <div className="no-posts-message text-center my-5">
                  <h5 className='text-muted'>No posts found</h5> {/* Message when no posts are found */}
                </div>
              ) : (
                currentPosts.map((post, index) => (
                  <Link key={index} to={`/post/${post.id}`} className="text-decoration-none text-dark col-lg-5 col-md-12 col-12 m-auto">
                    <div className="card">
                      <PostCard
                        title={post.title}
                        description={post.description}
                        category={post.category}
                        authorName={post.author.name}
                        authorImage={post.author.avatar}
                        date={post.date}
                        image={post.image} // Pass image to PostCard
                      />
                    </div>
                  </Link>
                ))
              )}
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

          <div className="col-lg-3 col-md-4 col-12 mx-auto my-3">
            <Sidebar categories={categories} /> {/* Render sidebar with categories and recent posts */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogSection;
