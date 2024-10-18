import React, { useState } from 'react';
import Sidebar from '../../components/blog/SideBar';
import PostCard from '../../components/blog/PostCard1';
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

  // Get the current page from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const [currentPage] = useState(pageParam ? parseInt(pageParam) : 1);

  // Pagination logic
  const postsPerPage = 6  ; // Number of posts per page

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
                <a key={index} href="post-v1" className="text-decoration-none text-dark col-lg-5 col-md-10 col-10 m-auto">
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
                </a>
              ))}
            </div>

            {/* Updated Pagination Controls */}
            <nav aria-label="Page navigation" className="mt-5">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link fs-5 fw-semibold" href={`?page=${currentPage - 1}`} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <a className="page-link fs-5 fw-semibold" href={`?page=${i + 1}`}>{i + 1}</a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <a className="page-link fs-5 fw-semibold" href={`?page=${currentPage + 1}`} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
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
