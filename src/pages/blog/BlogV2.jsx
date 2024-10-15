import React, { useState } from 'react';
import Sidebar from '../../components/blog/SideBar';
import PostCard from '../../components/blog/PostCard2';
import post1 from '../../assets/images/V1/blog/1.jpg';
import post2 from '../../assets/images/V1/blog/2.jpg';
import user from '../../assets/images/V1/home/testimonialsSection/1.jpg';

const BlogSection = () => {
  const blogPosts = [
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },

    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    { image: post1, title: 'The Future of Sustainable Construction', category: 'Remodeling', description: 'Explore the latest innovations in sustainable building practices...', author: { name: 'John Doe', avatar: user }, date: '2 days ago' },
    // Add more blog posts here
  ];

  const categories = ['Design', 'Improvement', 'Makeovers', 'Remodeling'];
  const recentPosts = [
    { image: post2, title: 'The Future of Sustainable Construction', category: 'Remodeling', date: '2 days ago' },
    // Add more recent posts here
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6  ; // Number of posts per page

  // Calculate indexes for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle "Next" and "Previous" buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <React.Fragment>
      <div className="blog-section container     my-5 py-5">
        <div className="row gap-3">
          <div className="col-lg-8 col-12">
            <div className="d-flex flex-column gap-3">
              {currentPosts.map((post, index) => (
                <a key={index} href="post-v1" className="text-decoration-none ">
                 
                    <PostCard
                      title={post.title}
                      description={post.description}
                      category={post.category}
                      authorName={post.author.name}
                      authorAvatar={post.author.avatar}
                      date={post.date}
                      image={post.image}
                    />
                  
                </a>
              ))}
            </div>

            {/* Pagination Controls */}
            <nav aria-label="Page navigation example" className="mt-4">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={handlePreviousPage}>Previous</button>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={handleNextPage}>Next</button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-3  col-12 mx-auto">
            <Sidebar categories={categories} recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogSection;
