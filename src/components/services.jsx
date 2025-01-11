import React from 'react';

const ServicesSection = () => {
  return (
    <article className="services">
      <div className="services__container container">
        <h2 className="services__title base-title">services</h2>
        <div className="services__slider services-slider swiper">
          <div className="services-slider__controls">
            <button className="services-slider__button-prev">
              <img src="/icon/arrow-slider.svg" alt="Previous Arrow" />
            </button>
            <button className="services-slider__button-next">
              <img src="/icon/arrow-slider.svg" alt="Next Arrow" />
            </button>
          </div>
          <div className="services-slider__wrapper swiper-wrapper">
            <div className="services-slider__slide swiper-slide">
              <img className="services-slider__slide-image" src="/services-image-one.jpg" alt="Service Image One" />
            </div>
            <div className="services-slider__slide swiper-slide">
              <img className="services-slider__slide-image" src="/services-image-two.jpg" alt="Service Image Two" />
            </div>
            <div className="services-slider__slide swiper-slide">
              <img className="services-slider__slide-image" src="/services-image-three.jpg" alt="Service Image Three" />
            </div>
          </div>
          <ul className="services__accordion">
            <div className="services__bg">
              <img src="/icon/back-business.svg" alt="Background Icon" />
            </div>
            <li className="services__point services-point open" id="services-point-one">
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">Aircraft line maintenance services</h3>
              </header>
              <section className="services-point__content">
                <ul className="services-point__list">
                  <li className="services-point__list-point base-text">Aircraft transit, daily, and weekly checks</li>
                  <li className="services-point__list-point base-text">AOG support</li>
                  <li className="services-point__list-point base-text">Aircraft technical certification</li>
                  <li className="services-point__list-point base-text">Aircraft servicing</li>
                  <li className="services-point__list-point base-text">Cabin maintenance</li>
                  <li className="services-point__list-point base-text">Unblocking lavatory bowl/faucett</li>
                  <li className="services-point__list-point base-text">Troubleshooting</li>
                  <li className="services-point__list-point base-text">Engineering & manpower support</li>
                  <li className="services-point__list-point base-text">Qualified aircraft towing technicians’ assistant</li>
                </ul>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
            <li className="services__point services-point" id="services-point-two">
              <header className="services-point__header">
                <span className="services-point__title-accent">
                  <img src="/icon/tab-active.svg" alt="Tab Active Icon" />
                </span>
                <h3 className="services-point__title">Ramp support unit</h3>
              </header>
              <section className="services-point__content">
                <p className="services-point__paragraph services-point__paragraph--margin-small base-text">
                  We have developed a ramp support unit that can clean leakage in the ramp and support AOG maintenance activities.
                </p>
                <p className="services-point__paragraph base-text">
                  This unit will allow MAX TECHNIQUE to act independently without the need to borrow equipment from other vendors. Furthermore, it will let carriers reduce cost per landing.
                </p>
                <p className="services-point__paragraph base-text services-point__paragraph--margin-small">
                  The kit consists of:
                </p>
                <ul className="services-point__list">
                  <li className="services-point__list-point base-text">air compressor</li>
                  <li className="services-point__list-point base-text">electric generator (capable to operate 800 watts lighting, as well for ramp maintenance)</li>
                  <li className="services-point__list-point base-text">high pressure wash machine</li>
                  <li className="services-point__list-point base-text">air, dry, and liquid vacuum</li>
                  <li className="services-point__list-point base-text">150 liters water tank</li>
                  <li className="services-point__list-point base-text">800 watts LED light (environmentally friendly)</li>
                </ul>
                <button className="services-point__button base-button order-open">
                  <span>Place order</span>
                </button>
              </section>
            </li>
            {/* Add other service points here in the same format */}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ServicesSection;
