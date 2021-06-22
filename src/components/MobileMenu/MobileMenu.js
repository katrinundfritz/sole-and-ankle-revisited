/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label=''>
        <CloseButton>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} color={COLORS.gray[900]} />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </UnstyledButton>
        </CloseButton>
        <Filler />
        <Navigation>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Navigation>
        <Filler>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Filler>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  padding: 32px;
  width: 300px;
  height: 100vh;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 22px;
  top: 32px;
  cursor: pointer;
`;

const Filler = styled.div`
  flex: 1;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  text-decoration: none;
  gap: 22px;

  & a {
    color: ${COLORS.gray[900]};
    text-decoration: none;
  }

  & a:first-of-type {
    color: ${COLORS.secondary};
  }
`

const Footer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 14px;
  justify-content: flex-end;

  & a {
    font-size: 0.875rem;
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }

`

export default MobileMenu;
