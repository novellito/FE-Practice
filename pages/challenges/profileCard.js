import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: hsl(185, 75%, 39%);
  font-family: 'Kumbh Sans', sans-serif;
  .top-bubble {
    bottom: 40%;
    right: 40%;
    width: 100vw;
  }

  .bot-bubble {
    top: 40%;
    left: 40%;
    width: 100vw;
  }
`;

const productPreview = (props) => {
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
      <Container data-theme="light">
        <img
          className="fixed top-bubble"
          src="/profile-card/bg-pattern-top.svg"
          alt="bg"
        />
        <img
          className="fixed bot-bubble"
          src="/profile-card/bg-pattern-bottom.svg"
          alt="bg"
        />
        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl relative">
          <img
            className="absolute w-full "
            src="/profile-card/bg-pattern-card.svg"
            alt="bg"
          />

          <div className="avatar justify-center mt-24">
            <div className="w-24 rounded-full ring ring-white  ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-black m-0">
              Victor Crest{' '}
              <span className="text-gray" style={{ color: '#A6ADBA' }}>
                26
              </span>
            </h2>
            <p className="text-lg">London</p>
            <hr
              style={{ width: '110%', position: 'relative', left: '-20px' }}
            />
            <div className="card-actions flex place-content-evenly p-1">
              <div>
                <p className="text-lg font-bold text-black">80K</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="text-lg font-bold text-black">803K</p>
                <p>Likes</p>
              </div>
              <div>
                <p className="text-lg font-bold text-black">1.4K</p>
                <p>Photos</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default productPreview;
