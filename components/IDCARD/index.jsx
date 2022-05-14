import React from "react";
import Label from "../Label";
import styled from "styled-components";
import "./IDCARD.css";

function IDCARD(props) {
  const {
    issuerName,
    userimage,
    name1Props,
    name2Props,
    name3Props,
    name4Props,
    name5Props,
    name6Props,
    name7Props,
    name8Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="idcard screen">
        <METADATAFRAME>
          <TopFrame>
            <IssuerName>{issuerName}</IssuerName>
            <RightTop>
              <Label fullName={name1Props.fullName} userDetail={name1Props.userDetail} />
              <Label fullName={name2Props.fullName} userDetail={name2Props.userDetail} className={name2Props.className} />
              <Label fullName={name3Props.fullName} userDetail={name3Props.userDetail} className={name3Props.className} />
              <Label fullName={name4Props.fullName} userDetail={name4Props.userDetail} className={name4Props.className} />
            </RightTop>
          </TopFrame>
          <BottomFrame>
            <Label fullName={name5Props.fullName} userDetail={name5Props.userDetail} className={name5Props.className} />
            <Label fullName={name6Props.fullName} userDetail={name6Props.userDetail} className={name6Props.className} />
            <Label fullName={name7Props.fullName} userDetail={name7Props.userDetail} className={name7Props.className} />
            <Label fullName={name8Props.fullName} userDetail={name8Props.userDetail} className={name8Props.className} />

          </BottomFrame>
        </METADATAFRAME>
        <USERIMAGE src={userimage} />
      </div>
    </div>
  );
}

const METADATAFRAME = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 36px;
  flex-direction: column;
  min-width: 361px;
  min-height: 284px;
`;

const TopFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 361px;
  min-height: 112px;
`;

const IssuerName = styled.div`
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const RightTop = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;
  min-width: 239px;
  min-height: 112px;
`;

const BottomFrame = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  gap: 16px;
  flex-direction: column;
  min-width: 264px;
  min-height: 136px;
`;

const USERIMAGE = styled.img`
  height: 193px;
  width: 143px;
  object-fit: cover;
`;

export default IDCARD;
