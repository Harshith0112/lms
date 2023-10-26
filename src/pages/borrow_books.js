import React from "react";
import { GlobalStyle, HeadTitle } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {
  Card,
  CardBody,
  CardImage,
  CardName,
  CardDescription,
} from "../components/Styles";
import book17 from "../images/the-collected-regrets-of-clover-book.png";
import book5 from "../images/essex-dogs-book.png";


const Borrow = () => {
  return (
    <div>
      <GlobalStyle />
      <NavbarHead />
      <HeadTitle style={{ marginTop: "130px" }}>Your Books</HeadTitle>
      <Card>
        <CardImage src={book17} alt="The Collected Regrets of Clover by Mikki Brammer" />
        <CardBody>
          <CardName>The Collected Regrets of Clover</CardName>
          <CardDescription>The Collected Regrets of Clover by Mikki Brammer.</CardDescription>
        </CardBody>
      </Card>
      <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Essex Dogs</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
            </CardBody>
          </Card>
      <FooterBottom />
    </div>
  );
};

export default Borrow;
