import React from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarDark';
import Footer from '../../components/footer/FooterV1';  
import BlogPostCard from '../../components/blog/blogV1/BlogPostCard';
import Sidebar from '../../components/blog/blogV1/BlogSideBar';
import post1 from '../../assets/images/V1/blog/1.jpg';
import post2 from '../../assets/images/V1/blog/2.jpg';
import user from '../../assets/images/V1/home/testimonialsSection/1.jpg';


const BlogSection = () => {
  const blogPosts = [
    {
      image: post1,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      description: 'Explore the latest innovations in sustainable building practices...',
      author: { name: 'John Doe', avatar: user },
      date: '2 days ago',
    },
    {
      image: post1,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      description: 'Explore the latest innovations in sustainable building practices...',
      author: { name: 'John Doe', avatar: user },
      date: '2 days ago',
    },
    {
      image: post1,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      description: 'Explore the latest innovations in sustainable building practices...',
      author: { name: 'John Doe', avatar: user },
      date: '2 days ago',
    },
    // Add more blog posts here
  ];

  const categories = ['Design', 'Improvement', 'Makeovers', 'Remodeling'];
  const recentPosts = [
    {
      image: post2,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      date: '2 days ago',
    },
    {
      image: post2,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      date: '2 days ago',
    },
    {
      image: post2,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      date: '2 days ago',
    },
    // Add more recent posts here
  ];

  return (
    <React.Fragment>
    <NavigationBar />
    <div className="blog-section container my-5 py-5">
      <div className="row">
        <div className="col-md-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
        <div className="col-md-3 mx-auto">
          <Sidebar categories={categories} recentPosts={recentPosts} />
        </div>
      </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default BlogSection;
