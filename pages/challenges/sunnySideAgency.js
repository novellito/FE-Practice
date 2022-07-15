import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  .hero {
    h1 {
      font-family: Fraunces;
      transform: translateY(-100px);
      letter-spacing: 6px;
    }
  }
  .learn {
    font-family: Fraunces;
    color: black;
    margin-top: 1.5rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 7px;
      background-color: #fad400;
      opacity: 35%;
      bottom: 2px;
      width: 120px;
      left: 210px;
      @media (min-width: 768px) {
        left: -3px;
      }
    }
  }
  .title {
    font-family: Fraunces;
    font-weight: bold;
    color: black;
    + p {
      font-family: barlow;
    }
  }
  .testimonials {
    h1 {
      font-family: Fraunces;
      letter-spacing: 3px;
    }
    .client {
      padding: 0 20px;
    }
    .quote {
      /* width: 70%;
      text-align: center;
      margin: 50px auto; */
    }
    .client-name {
      font-family: Fraunces;
    }
  }
  .footer {
    background-color: #7cc5b4;
    h1 {
      color: hsl(212, 27%, 19%);
      font-weight: 900;
    }
  }
  .menu {
    li {
      padding: 0.5rem;
      text-align: center;
    }
    a,
    button {
      font-size: 1.2rem;
      font-weight: bold;
      justify-content: center;
    }
  }
`;

const sunnySideAgency = (props) => {
  return (
    <>
      <Container data-theme="light">
        <div className="navbar px-8 py-4 fixed bg-transparent">
          <div className="navbar-start flex-1">
            <img className="" src="/sunny-agency/logo.svg" alt="" />
          </div>
          <div className="hidden md:block flex-none">
            <ul className="menu menu-horizontal p-0 text-white">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li className="">
                <button className="btn !rounded-full border-white bg-white text-black">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end  md:hidden">
            <div className="dropdown dropdown-end ">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="flex justify-center menu menu-compact dropdown-content min-w-[85vw] mt-3 p-2 shadow bg-base-100 rounded-box"
              >
                <li className="px-10 text-xl">
                  <a>About</a>
                </li>
                <li className="px-10 text-xl">
                  <a>Services</a>
                </li>
                <li className="px-10 text-xl">
                  <a>Projects</a>
                </li>
                <li className="px-10 text-xl">
                  <button className="btn !rounded-full border-white bg-[#fad400] text-black w-1/2 mx-auto">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="hero min-h-screen"
          style={{ backgroundImage: 'url(/sunny-agency/image-header.jpg)' }}
        >
          <div className=" hero-content text-center text-neutral-content">
            <div className="">
              <h1 className=" text-5xl font-bold">WE ARE CREATIVES</h1>
              <img
                className="mx-auto"
                src="/sunny-agency/icon-arrow-down.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <section className="grid md:grid-cols-2">
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
              src="/sunny-agency/image-graphic-design.jpg"
              alt=""
            />
            <div className="subtext absolute flex text-center flex-col px-20 max-w-[32rem] bottom-10 md:bottom-8 lg:bottom-20">
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
        <section className="testimonials md:px-24 py-24 lg:py-28">
          <h1 className="text-center text-2xl mb-20">CLIENT TESTIMONIALS</h1>
          <div className="lg:flex">
            <div className="client flex justify-center text-center">
              <div className="client">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="mt-12 text-[#818498] font-bold quote leading-7">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <p className="mt-8 lg:mt-20 mb-2 text-xl text-black font-bold client-name">
                  Emily R.
                </p>
                <p className="text-[#818498] mb-20 lg:mb-0">
                  Marketing Director
                </p>
              </div>
            </div>
            <div className="client flex flex-row justify-center text-center">
              <div className="client">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="mt-12 text-[#818498] font-bold quote leading-7">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <p className="mt-8 lg:mt-20 mb-2 text-xl text-black font-bold client-name">
                  Thomas S.
                </p>
                <p className="text-[#818498] mb-20 lg:mb-0">
                  Chief Operating Officer
                </p>
              </div>
            </div>
            <div className="client flex flex-row justify-center text-center">
              <div className="client">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="mt-12 text-[#818498] font-bold quote leading-7">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <p className="mt-8 lg:mt-20 mb-2 text-xl text-black font-bold client-name">
                  Jennie F.
                </p>
                <p className="text-[#818498] mb-20 lg:mb-0">Business Owner</p>
              </div>
            </div>
          </div>
        </section>
        <section className="splash grid grid-cols-2 md:grid-cols-4">
          <img
            className=" w-full"
            src="/sunny-agency/image-gallery-milkbottles.jpg"
            alt=""
          />
          <img
            className=" w-full"
            src="/sunny-agency/image-gallery-orange.jpg"
            alt=""
          />
          <img
            className=" w-full"
            src="/sunny-agency/image-gallery-cone.jpg"
            alt=""
          />
          <img
            className=" w-full"
            src="/sunny-agency/image-gallery-sugarcubes.jpg"
            alt=""
          />
        </section>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <h1 className="text-4xl font-bold">sunnyside</h1>
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Projects</a>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default sunnySideAgency;
