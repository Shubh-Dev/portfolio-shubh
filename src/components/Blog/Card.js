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
      <div className="box btn_shadow " data-aos="slide-right">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} onKeyDown={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.date}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal modal-blog">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button type="button" className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times" />
              </button>
              <a href={props.link} target="_blank" rel="noreferrer">
                <button type="button" className="btn_shadow">
                  Read More...
                </button>
              </a>
              <div className="contact mtop">
                <h1>
                  Leave a Reply
                  (Under Construction)
                </h1>

                <form className="blog_contact d_flex">
                  <div className="left">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Website" required />
                    <button type="button" className="btn_shadow">SUBMIT NOW</button>
                  </div>
                  <div className="right">
                    <textarea cols="30" rows="12" placeholder="Comment" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
