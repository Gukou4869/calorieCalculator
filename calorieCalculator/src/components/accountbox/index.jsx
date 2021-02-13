import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: colimn;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  displey: flex;
  flex-dirextion: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
width:160%
height:550px
position:absolute;
display:flex;
flex-direction:column
border-radius:50%
background: rgb(2,0,36);
background: linear-gradien(
    58deg,
    t(20deg, rgba(2,0,36,1) 0%, rgba(241,196,15,1) 100%
    );
`;

export function AccountBox() {
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop />
      </TopContainer>
    </BoxContainer>
  );
}
