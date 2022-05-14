import React from "react";
import styled from "styled-components";
import { InterMediumWhite18px, InterMediumWhite12px } from "../../styledMixins";


function Label(props) {
  const { fullName, userDetail, className } = props;

  return (
    <CountryCodeFrame className={`country-code-frame ${className || ""}`}>
      <CountryCode className="country-code">{fullName}</CountryCode>
      <UserDetail className="user-detail">{userDetail}</UserDetail>
    </CountryCodeFrame>
  );
}

const CountryCodeFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 141px;
  min-height: 22px;

  &.country-code-frame.id-number-frame {
    justify-content: space-between;
    width: 239px;
    gap: unset;
    min-width: unset;
  }

  &.country-code-frame.idd-frame {
    justify-content: space-between;
    width: 239px;
    gap: unset;
    min-width: unset;
  }

  &.country-code-frame.can-frame {
    justify-content: space-between;
    width: 239px;
    gap: unset;
    min-width: unset;
  }

  &.country-code-frame.full-name-frame {
    gap: 36px;
    min-width: 264px;
  }

  &.country-code-frame.dateof-birth-frame {
    justify-content: space-between;
    width: 225px;
    gap: unset;
    min-width: unset;
  }

  &.country-code-frame.gender-frame {
    justify-content: space-between;
    width: 119px;
    gap: unset;
    min-width: unset;
  }

  &.country-code-frame.placeof-birth-frame {
    justify-content: space-between;
    width: 262px;
    gap: unset;
    min-width: unset;
  }
`;

const CountryCode = styled.div`
  ${InterMediumWhite12px}
  letter-spacing: 0;
`;

const UserDetail = styled.div`
  ${InterMediumWhite18px}
  letter-spacing: 0;
`;

const UserDetail1 = styled.div`
  ${InterMediumWhite18px}

  .country-code-frame.idd-frame  & {
    text-align: center;
  }
`;

const UserDetail2 = styled.div`
  ${InterMediumWhite18px}

  .country-code-frame.gender-frame  & {
    text-align: center;
  }
`;

export default Label;
