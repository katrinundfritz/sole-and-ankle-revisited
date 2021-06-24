/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} color='var(--color-gray-900)' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Navigation>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Navigation>
        <Filler>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
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
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
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

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: 0px;
  top: 10px;
  cursor: pointer;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  text-decoration: none;
  gap: 16px;
`

const NavLink = styled.a`

  font-size: 1.125rem;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  text-decoration: none;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 8px;
  justify-content: flex-end;
`

const FooterLink = styled.a`
  font-size: 0.875rem;
  color: var(--color-gray-700);
  text-decoration: none;
`

export default MobileMenu;
