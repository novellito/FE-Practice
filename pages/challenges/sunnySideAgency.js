import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  background-color: white;
  .learn {
    font-family: Fraunces;
    color: black;
    margin-top: 1.5rem;
  }
  .title {
    font-family: Fraunces;
    font-weight: bold;
    color: black;
    + p {
      font-family: barlow;
    }
  }
`;

const sunnySideAgency = (props) => {
  return (
    <>
      <Container data-theme="light">
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: 'url(/sunny-agency/image-header.jpg)' }}
        >
          {/* <div className="hero-overlay"></div> */}
          <div className=" hero-content text-center text-neutral-content">
            <div className=" max-w-md">
              <h1 className="mb-5 text-5xl font-bold">WE ARE CREATIVES</h1>
              <img
                className="mx-auto"
                src="/sunny-agency/icon-arrow-down.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <section className="grid md:grid-cols-2">
          {/* <img src="/sunny-agency/image-transform.jpg" alt="" /> */}
          <div className="py-24 text-center md:text-left md:py-0 px-16 lg:px-28 min-w-[20rem] flex flex-col justify-center align-middle text order-2 md:order-1">
            <h1 className="title text-3xl lg:text-4xl mb-4">
              Transform your brand
            </h1>
            <p className="leading-7">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <p className="learn">LEARN MORE</p>
          </div>
          <img
            className="order-1 md:order-2 object-cover	w-full"
            src="/sunny-agency/image-transform.jpg"
            alt=""
          />
          <img
            className="order-3 object-cover	w-full"
            src="/sunny-agency/image-stand-out.jpg"
            alt=""
          />
          <div className="py-24 text-center md:text-left md:py-0 px-16 lg:px-28 min-w-[20rem] flex flex-col justify-center align-middle text order-3">
            <h1 className="title text-3xl lg:text-4xl mb-4">
              Stand out to the right audience
            </h1>
            <p className="leading-7">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copyrighters, we'll build and
              extend your brand in digital places.
            </p>
            <p className="learn">LEARN MORE</p>
          </div>
          <div className="graphic-design order-5 relative flex text-center justify-center">
            <img
              className="order-5 w-full"
              //   className="order-3 object-cover w-full absolute"
              src="/sunny-agency/image-graphic-design.jpg"
              alt=""
            />
            <div className="subtext absolute flex text-center flex-col px-20 max-w-[32rem] bottom-10 md:bottom-8 lg:bottom-20">
              {/* <div className="subtext absolute flex text-center flex-col px-20 bottom-4 md:bottom-36"> */}
              <h1
                className="title text-2xl lg:text-4xl mb-4"
                style={{ color: 'hsl(167, 40%, 24%)' }}
              >
                Graphic Design
              </h1>
              <p
                className="leading-6 md:text-sm lg:text-md"
                style={{ color: 'hsl(167, 40%, 24%)' }}
              >
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients'
                attention
              </p>
            </div>
          </div>
          <div className="photography order-6 relative flex text-center justify-center">
            <img
              className=" w-full"
              //   className="order-3 object-cover w-full absolute"
              src="/sunny-agency/image-photography.jpg"
              alt=""
            />

            <div className="subtext absolute flex text-center flex-col px-20 max-w-[32rem] bottom-10 md:bottom-8 lg:bottom-20">
              <h1
                className="title text-2xl lg:text-4xl mb-4"
                style={{ color: 'hsl(198, 62%, 26%)' }}
              >
                Photography
              </h1>
              <p
                className="leading-6 md:text-sm lg:text-md"
                style={{ color: 'hsl(198, 62%, 26%)' }}
              >
                Increase your credibility by geting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h1>CLIENT TESTIMONIALS</h1>
          <div className="clients flex">
            <div className="client">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <p>Emily R.</p>
              <p>Marketing Director</p>
            </div>
            <div className="client">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <p>Emily R.</p>
              <p>Marketing Director</p>
            </div>
            <div className="client">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <p>Emily R.</p>
              <p>Marketing Director</p>
            </div>
          </div>
        </section>
        <section className="splash">pics</section>
      </Container>
    </>
  );
};

export default sunnySideAgency;
