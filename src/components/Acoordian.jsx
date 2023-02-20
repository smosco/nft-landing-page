import React, { useState } from "react";
import styled from "styled-components";
import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouseColor};
  margin: 3rem 0;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.textsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reveal = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center; ;
`;

const Indicator = styled.div`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouseColor};
  }
`;

export default function Acoordian({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Title
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Name>
          <span>{title}</span>
        </Name>
        {open ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </Title>
      <Reveal open={open}>{children}</Reveal>
    </Container>
  );
}
