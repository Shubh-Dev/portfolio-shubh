import React from 'react';
import { generate } from 'randomized-string';
import '../portfolio/Portfolio.css';
import './Blog.css';
import Card from './Card';
import BlogApi from './BlogApi';

const Blog = () => (
  <>
    <section className="Portfolio Blog" id="blog">
      <div className="container top">
        <div className="heading text-center">
          <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
          <h1>My Blog</h1>
        </div>

        <div className="content grid">
          {BlogApi.map((value) => (
            <Card
              key={generate()}
              image={value.image}
              date={value.date}
              title_one={value.title_one}
              title_two={value.title_two}
              title_three={value.title_three}
              desc_one={value.desc_one}
              desc_two={value.desc_two}
              desc_three={value.desc_three}
              link={value.link}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
