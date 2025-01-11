import React from 'react';

const OrderSection = () => {
  return (
    <section className="order">
      <div className="order__container container">
        <a href="" className="order__logo">
          {/* Include logo icon */}
          <img src="/icon/logo.svg" alt="Logo" />
        </a>
        <button className="order__close">
          {/* Include cross icon */}
          <img src="/icon/cross.svg" alt="Close" />
        </button>
        <h3 className="order__title">
          Leave your message and we'll be <span className="order__title-accent">sure to respond.</span>
        </h3>
        <form action="" className="order__form order-form">
          <div className="order-form__field">
            <input type="text" className="order-form__input" placeholder="Name" />
          </div>
          <div className="order-form__group-field">
            <div className="order-form__field">
              <input type="email" className="order-form__input" placeholder="E-mail" />
            </div>
            <div className="order-form__field">
              <input type="text" className="order-form__input" placeholder="Phone" />
            </div>
          </div>
          <div className="order-form__field">
            <input type="text" className="order-form__input" placeholder="Your message" />
          </div>
          <button className="order-form__button base-button">
            <span>Send message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
