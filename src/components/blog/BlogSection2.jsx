import React, { useEffect, useRef, useState } from 'react';
import BlogPostCard2 from './PostCard2';
import blogData from '../../data/blog/posts.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const BlogSection2 = () => {
    const sectionRef = useRef(null);
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const loadBlogPosts = async () => {
            const loadedPosts = await Promise.all(
                blogData.blogPosts.slice(0, 2).map(async (post) => ({
                    ...post,
                    image: await importImage(post.image)
                }))
            );
            setBlogPosts(loadedPosts);
        };

        loadBlogPosts();

        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className='container-fluid my-5 py-3 reveal-section' ref={sectionRef}>
            <div className='row'>
                <div className="col-lg-4 p-5 my-auto">
                    <div className="my-auto">
                        <h2 className='display-6 reveal-element reveal-1'>Our Blog</h2>
                        <h3 className=' text-primary fw-semibold display-5 reveal-element reveal-2'>Latest News</h3>
                        <p className='mt-3 mb-4 reveal-element reveal-3'>Stay updated with the latest trends and insights in the construction industry.</p>
                        <a href="blog-v1" className='link-fill-right reveal-element reveal-4'>Check Blog</a>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='row'>
                        {blogPosts.map((post, index) => (
                            <div key={index} className='col-10 mx-auto mb-4 reveal-element reveal-5'>
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
