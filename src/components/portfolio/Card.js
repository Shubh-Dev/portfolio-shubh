/* eslint-disable */
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  AiOutlineCheck,
  AiOutlineArrowRight,
  AiOutlineGithub,
} from "react-icons/ai";
import PropTypes from "prop-types";
import "./Portfolio.css";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow width" data-aos="fade-up">
        <div className="img">
          <img
            src={props.image}
            className="img"
            alt="project screenshoot"
            onClick={toggleModal}
          />
        </div>
        <div className="category d_flex flex-dir">
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <AiOutlineCheck /> {props.tech}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content">
            <div className="modal-img">
              <img className="modal-image" src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1 className="modal-headline">{props.title}</h1>
              <p className="modal-description">{props.description} </p>
              <div className="button f_flex mtop">
                <a
                  href={props.seelive}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <button
                    type="button"
                    className="btn_shadow project-detail-btn"
                  >
                    SEE LIVE
                    <AiOutlineArrowRight />
                  </button>
                </a>

                <a
                  href={props.seesource}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <button
                    type="button"
                    className="btn_shadow project-detail-btn"
                  >
                    SEE CODE
                    <AiOutlineGithub />
                  </button>
                </a>
              </div>
              <button
                type="button"
                className="close-modal btn_shadow"
                onClick={toggleModal}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  seelive: PropTypes.string.isRequired,
  seesource: PropTypes.string.isRequired,
};
