/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
  <>
    <div className="box btn_shadow" data-aos="slide-up">
      <div className="title_content d_flex">
        <div className="title">
          <h2>{props.title}</h2>
          <span>{props.year}</span>
        </div>
        <div className="rate">
          <button type="button" className="btn_shadow ">{props.rate}</button>
        </div>
      </div>
      <hr />
      <p>{props.desc}</p>
    </div>
  </>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
