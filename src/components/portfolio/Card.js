import React, { useState } from 'react';

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <>
      <div className="box btn_shadow width" data-aos="slide-up">
        <div className="img">
          <img src={props.image} alt="project screenshoot" onClick={toggleModal} />
        </div>
        <div className="category d_flex flex-dir">
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className="fa-solid fa-check" />
            {' '}
            {props.tech}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>
                {props.description}
                {' '}
              </p>
              <div className="button f_flex mtop">
                <a href={props.seelive} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <button type="button" className="btn_shadow">
                    SEE LIVE
                    <i className="fas fa-arrow-right" />

                  </button>
                </a>

                <a href={props.seesource} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <button type="button" className="btn_shadow">
                    SEE CODE
                    <i className="fab fa-github" />
                  </button>
                </a>
              </div>
              <button type="button" className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
