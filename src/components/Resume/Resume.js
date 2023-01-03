import React from 'react';
import { generate } from 'randomized-string';
import './Resume.css';
import ResumeApi from './ResumeApi';
import Card from './Card';

const Resume = () => (
  <>
    <section className="Resume" id="resume">
      <div className="container top">
        <div className="heading text-center">
          <h1>My Resume</h1>
          <a href="https://docs.google.com/document/d/1w9CV2EPFp9fpLeo240D0VUVpUhJWoFWGstz7aLwYwdg/edit?usp=sharing" target="_blank" rel="noreferrer">
            <button type="button" className="btn_shadow get-resume" data-aos="flip-right">Get my full resume</button>
          </a>
        </div>

        <div className="content-section mtop d_flex">
          <div className="left">
            <div className="heading">
              <h1> Education</h1>
            </div>

            <div className="content">
              {ResumeApi.map((val, id) => {
                if (val.category === 'education') {
                  return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />;
                }
              })}

            </div>
          </div>
          <div className="left">
            <div className="heading">
              <h1> Experience</h1>
            </div>

            <div className="content">
              {ResumeApi.map((val) => {
                if (val.category === 'experience') {
                  return <Card key={generate()} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Resume;
