/* eslint-disable */
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
          <a href="https://docs.google.com/document/d/1MY4hvtXwAXVVuDe51GPyTU2CgZ2tjCsVSge_jkYg9qI/edit?usp=sharing" target="_blank" rel="noreferrer">
            <button type="button" className="btn_shadow get-resume">Get my resume</button>
          </a>
        </div>

        <div className="content-section mtop d_flex">
          <div className="left">
            <div className="heading resume-stack">
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
            <div className="heading resume-stack">
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
