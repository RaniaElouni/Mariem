import React from "react";
import styled from "styled-components";

import Lottie from 'react-lottie';
import hello from "./assets/lotties/helloCoficab.json"
import img from "./assets/lotties/img.json"
const Container = styled.div`
  background-color: #f9fafc;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -900;
`;

const LeftSide = styled.div`
  position: absolute;
  bottom: 289px;
  left: 0;
  z-index: -999;
  width: 30vw;
  max-width: 400px;
`;
const RightSide = styled.div`
position: absolute;
    bottom: 289px;
    right: 0;
    z-index: -999;
    width: 30vw;
    max-width: 400px;
`;

const Svg = styled.img`

vertical-align: middle;
width: 100%;
height: 100%;
`;

const Background = () => {
  return (
    <Container>
      <LeftSide>
      <Lottie 
	    options={{
        loop: true,
        autoplay: true,
        animationData: hello,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }}
        height={400}
        width={400}
      />
      </LeftSide>
      <RightSide>
      <Lottie 
	    options={{
        loop: true,
        autoplay: true,
        animationData: img,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }}
        height={400}
        width={400}
      />
      </RightSide>
    </Container>
  );
};

export default Background;
