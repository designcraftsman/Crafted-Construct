import React, { useEffect, useRef } from 'react';
import blog1 from '../../assets/images/V1/blog/1.jpg';
import blog2 from '../../assets/images/V1/blog/2.jpg';
import BlogPostCard2 from './PostCard2';

const BlogSection2 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const blogPosts = [
        {
            image: blog1,
            title: "The Future of Sustainable Construction",
            category: "Sustainability",
            description: "Explore innovative techniques and materials shaping the future of eco-friendly building practices.",
            author: "Jane Doe",
            date: "April 15, 2023"
        },
        {
            image: blog2,
            title: "Emerging Technologies in Construction Management",
            category: "Technology",
            description: "Discover how AI, IoT, and automation are revolutionizing project management in the construction industry.",
            author: "John Smith",
            date: "April 22, 2023"
        }
    ];

    return (
        <div className='container-fluid my-5 py-3 reveal-section' ref={sectionRef}>
            <div className='row'>
                <div className="col-lg-4 p-5 my-auto">
                    <div className="my-auto">
                        <h2 className='display-6 reveal-element reveal-1'>Our Blog</h2>
                        <h3 className='fw-bold text-primary display-5 reveal-element reveal-2'>Latest News</h3>
                        <p className='mt-3 mb-4 reveal-element reveal-3'>Stay updated with the latest trends and insights in the construction industry.</p>
                        <a href="blog-v1" className='link-fill-right reveal-element reveal-4'>Check Blog</a>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='row'>
                        {blogPosts.map((post, index) => (
                            <div key={index} className='col-12 mb-4 reveal-element reveal-5'>
                                <BlogPostCard2 {...post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection2;