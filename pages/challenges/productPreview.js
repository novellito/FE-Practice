import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';

const primary = '#3c8067';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: hsl(30, 38%, 92%);
  font-family: Montserrat;

  .header {
    font-family: Montserrat;
    font-weight: 500;
    color: #6c7289;
    letter-spacing: 1px;
  }
  .main {
    font-family: Fraunces;
    color: #000;
  }
  .primary-example {
    background-color: ${primary};
    border: 1px solid ${primary};
  }
  .desc {
    line-height: 1.95rem;
  }
  .prices {
    span {
      &:first-child {
        font-family: Fraunces;
        color: ${primary};
      }
    }
  }
`;

const productPreview = (props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container data-theme="light">
        <div className="card md:card-side bg-base-100 shadow-xl">
          <img
            className=""
            src="/perfume-desktop.jpg"
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '500px',
              maxHeight: '550px',
              minHeight: '300px',
            }}
            alt="Album"
          />
          {/* <div className="w-full h-full object-cover md:w-80">
            <Image
              alt="perfume desktop"
              src="/perfume-desktop.jpg"
              width={400}
              height={400}
              layout={'responsive'}
                layout="fill"
                objectFit="object-contain"
                objectFit="cover"
                quality={100}
            />
          </div> */}
          <div className="card-body max-w-md">
            <h2 className="card-title text-lg header ">PERFUME</h2>
            <h3 className="card-title text-5xl py-3 main">
              Gabrielle Essence Eau De Parfum
            </h3>
            <p className="desc text-lg md:w-80">
              A floral, solar and voluptuous interpretation composed by Oliver
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <div className="prices flex items-center py-5">
              <span className="text-4xl">$149.99</span>
              <span className="text-md line-through ml-10">$169.99</span>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary w-full lg:w-10/12 primary-example">
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
      </Container>
    </>
  );
};

export default productPreview;
