import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Accordian from "../Acoordian";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 45%;
`;

export default function Faq() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });
    return () => {
      ScrollTrigger.kill();
    };
  }, []);
  return (
    <Section ref={ref}>
      <Title>FaQ</Title>
      <Container>
        <Box>
          <Accordian
            title="WHERE CAN I VIEW MY NFTS?"
            children="Once minted or bought simply connect to your OpenSea account//
             to view your NFTs."
          ></Accordian>
          <Accordian
            title="WHERE CAN I VIEW MY NFTS?"
            children="Once minted or bought simply connect to your OpenSea account//
             to view your NFTs."
          ></Accordian>
          <Accordian
            title="WHERE CAN I VIEW MY NFTS?"
            children="Once minted or bought simply connect to your OpenSea account//
             to view your NFTs."
          ></Accordian>
        </Box>
        <Box>
          <Accordian
            title="WHERE CAN I VIEW MY NFTS?"
            children="Once minted or bought simply connect to your OpenSea account//
             to view your NFTs."
          ></Accordian>
          <Accordian
            title="WHERE CAN I VIEW MY NFTS?"
            children="Once minted or bought simply connect to your OpenSea account//
             to view your NFTs."
          ></Accordian>
          <Accordian
            title="WHERE CAN I VIEW MY NFTS?"
            children="Once minted or bought simply connect to your OpenSea account//
             to view your NFTs."
          ></Accordian>
        </Box>
      </Container>
    </Section>
  );
}
