import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; The Digital Specs store {new Date().getFullYear()}. all
                    rights reserved{" "}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  background-color: #222222;
 
  bottom: 0px;
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
