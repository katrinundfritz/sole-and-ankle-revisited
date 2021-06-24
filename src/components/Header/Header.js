import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" strokeWidth={2} color='var(--color-gray-900)' />
            <VisuallyHidden>Toggle card</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} color='var(--color-gray-900)' />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} color='var(--color-gray-900)' />
            <VisuallyHidden>Toggle menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
    justify-content: space-between;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }

  & ${UnstyledButton}:not(:last-of-type) {

    @media ${QUERIES.tabletAndSmaller} {
      margin-right: 32px;
    }

    @media ${QUERIES.phoneAndSmaller} {
      margin-right: 16px;
    }
  }
`

const DesktopNav = styled.nav`
  display: flex;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }

`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:not(:last-of-type) {
    margin-right: clamp(1rem, 6vw - 2.5rem, 3rem);
  }

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px)
`

export default Header;
