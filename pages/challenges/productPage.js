import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const OJ = ' hsl(26, 100%, 55%);';
const LIGHT_OJ = 'hsl(25, 100%, 94%);';
const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
  overflow: hidden;
  height: 100vh;
  .left-card {
    right: -30px;
  }
  .oj {
    background-color: ${OJ};
    border: 1px solid ${OJ};
  }
  .discount {
    color: ${OJ};
    background-color: ${LIGHT_OJ};
    font-weight: bold;
    padding: 0.5rem 0.8rem;
    border-radius: 0.5rem;
  }
  .count {
    background-color: hsl(223, 64%, 98%);
    color: black;
    font-weight: bold;
    line-height: 45px;
  }
  .counter-btn {
    color: ${OJ};
    background-color: hsl(223, 64%, 98%);
    border: 1px solid hsl(223, 64%, 98%);
  }
  .nav-list li {
    a {
      &:hover {
        background-color: inherit;
      }
    }
    &:hover,
    &.active-link {
      background-color: inherit;
      ::after {
        content: '';
        width: 87%;
        margin: auto;
        height: 7px;
        background-color: ${OJ};
        left: 5%;
        position: absolute;
        bottom: -33px;
      }
    }
  }
  .active-product {
    border: 4px solid ${OJ};
    img {
      opacity: 50%;
    }
  }
`;

const getItemSet = (count) => {
  return (
    <p>
      $125.00 x {count} <b className="text-black">${125 * count}.00</b>
    </p>
  );
};
const productPreview = (props) => {
  const [count, setCounter] = useState(0);
  const [isAtc, setAtc] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container data-theme="light" className="px-8 lg:py-8 lg:px-28">
        <div className="-mx-8 drawer h-screen">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="navbar bg-base-100 fixed lg:relative ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">
                <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                    fill="#1D2026"
                    fillRule="nonzero"
                  />
                </svg>
                <ul className="menu menu-horizontal hidden lg:inline-flex p-0 ml-12 nav-list">
                  <li className="active-link">
                    <a>Collections</a>
                  </li>
                  <li>
                    <a>Men</a>
                  </li>
                  <li>
                    <a>Women</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <div className="flex-none gap-10">
                <div className="dropdown dropdown-end">
                  <label tabIndex="0" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item oj">
                        {count && isAtc ? count : 0}
                      </span>
                    </div>
                  </label>
                  <div
                    tabIndex="0"
                    className="mt-3 left-card card card-compact dropdown-content w-96 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg text-black">Cart</span>
                      <hr className="-mx-4" />
                      {count && isAtc ? (
                        <div className="item-row flex align-middle py-4">
                          <img
                            className="w-12"
                            src="/product-page/image-product-1-thumbnail.jpg"
                            alt="bg"
                          />
                          <div className="texts ml-4">
                            <p>Fall Limited Edition Sneakers</p>
                            {getItemSet(count)}
                          </div>
                          <svg
                            className="ml-auto"
                            width="14"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs>
                              <path
                                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                id="a"
                              />
                            </defs>
                            <use fill="#C3CAD9" fillRule="nonzero" href="#a" />
                          </svg>
                        </div>
                      ) : (
                        <p className="font-bold text-center py-10">
                          Your cart is empty.
                        </p>
                      )}

                      <div className="card-actions">
                        <button className="btn btn-primary btn-block oj">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://placeimg.com/80/80/people" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <hr className="mt-6 hidden lg:block" />
            <section className="lg:flex lg:px-16 lg:py-20 lg:gap-20 justify-center">
              {/* <section className="h-full lg:flex lg:px-16 lg:py-20 lg:gap-20 overflow-hidden justify-center"> */}
              <div className="left lg:w-1/2  lg:max-w-2xl">
                <img
                  className="lg:rounded-2xl lg:min-w-[25rem]"
                  src="/product-page/image-product-1.jpg"
                  alt="bg"
                />
                <div className="pics hidden lg:flex justify-between mt-8  min-w-[25rem]">
                  <div className="active-product rounded-2xl  w-28 max-w-[6rem]">
                    <img
                      className=""
                      src="/product-page/image-product-1-thumbnail.jpg"
                      alt="bg"
                    />
                  </div>
                  <img
                    className="rounded-2xl min-w-[2rem] w-28 max-w-[6rem]"
                    src="/product-page/image-product-2-thumbnail.jpg"
                    alt="bg"
                  />
                  <img
                    className="rounded-2xl min-w-[2rem]	 w-28 max-w-[6rem]"
                    src="/product-page/image-product-3-thumbnail.jpg"
                    alt="bg"
                  />
                  <img
                    className="rounded-2xl  min-w-[2rem]	w-28 max-w-[6rem]"
                    src="/product-page/image-product-4-thumbnail.jpg"
                    alt="bg"
                  />
                </div>
              </div>
              <div className="px-8 py-10 min-h-96 lg:w-1/2 lg:max-w-xl">
                <p
                  className="text-md font-bold mb-6"
                  style={{ color: `${OJ}` }}
                >
                  SNEAKER COMPANY
                </p>
                <p className="text-4xl font-bold text-black mb-4 lg:mb-10">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-md  mb-8">
                  These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'll
                  withstand everything the weather can offer.
                </p>
                <div className="flex text-center items-center">
                  <span className="text-3xl text-black font-bold">$149.99</span>
                  <span className="text-md ml-5 discount">50%</span>
                  <span className="lg:hidden text-md line-through font-bold ml-auto">
                    $250.00
                  </span>
                </div>
                <p>
                  <span className="hidden lg:inline text-md line-through font-bold">
                    $250.00
                  </span>
                </p>
                <div className="btns">
                  <div className="flex flex-col lg:flex-row mt-6">
                    <div className="counter flex">
                      <button
                        onClick={() =>
                          setCounter((prev) => (prev - 1 < 0 ? 0 : prev - 1))
                        }
                        className="btn btn-primary counter-btn rounded-r-none"
                      >
                        <svg
                          width="12"
                          height="4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <path
                              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                              id="a"
                            />
                          </defs>
                          <use fill="#FF7E1B" fillRule="nonzero" href="#a" />
                        </svg>
                      </button>
                      <p className="count mb-6 lg:mb-0 w-full lg:w-20 text-center">
                        {count}
                      </p>
                      <button
                        onClick={() => setCounter((prev) => prev + 1)}
                        className="btn btn-primary counter-btn rounded-l-none"
                      >
                        <svg
                          width="12"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <defs>
                            <path
                              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                              id="b"
                            />
                          </defs>
                          <use fill="#FF7E1B" fillRule="nonzero" href="#b" />
                        </svg>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setAtc(true);
                      }}
                      className="btn btn-primary btn-block lg:btn-wide oj lg:ml-4"
                    >
                      <svg
                        width="15"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-4"
                      >
                        <path
                          d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                          fill="#FFF"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
              <li>
                <a>Collections</a>
              </li>
              <li>
                <a>Men</a>
              </li>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default productPreview;
