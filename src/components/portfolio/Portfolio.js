import React from 'react';
import { generate } from 'randomized-string';
import './Portfolio.css';
import Card from './Card';
import PortfolioData from './portfolioData';

const Portfolio = () => (
  <>
    <section className="Portfolio top" id="portfolio">
      <div className="container">
        <div className="heading text-center ">
          {/* <h4>VISIT MY PORTFOLIO</h4> */}
          <h3 className="my-projects">My Projects</h3>
        </div>

        <div className="content grid">
          {PortfolioData.map((value) => (
            <Card
              key={generate()}
              image={value.image}
              category={value.category}
              tech={value.tech}
              title={value.title}
              seesource={value.seesource}
              seelive={value.seelive}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Portfolio;
