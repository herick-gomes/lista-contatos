import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles/variaveis'

export const Aside = styled.aside`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  padding: 30px 22px;

  border-right: 1px solid ${cores.borda};

  background:
    linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.88) 0%,
      rgba(6, 9, 20, 0.94) 100%
    );

  backdrop-filter: blur(24px);

  @media (max-width: 900px) {
    position: relative;

    height: auto;

    padding: 20px;

    border-right: 0;
    border-bottom: 1px solid ${cores.borda};
  }
`

export const Brand = styled(Link)`
  display: flex;
  align-items: center;

  gap: 12px;

  margin-bottom: 44px;

  @media (max-width: 900px) {
    margin-bottom: 24px;
  }
`

export const BrandMark = styled.div`
  display: grid;
  place-items: center;

  width: 46px;
  height: 46px;

  flex-shrink: 0;

  border: 1px solid rgba(34, 211, 238, 0.3);
  border-radius: 15px;

  background:
    linear-gradient(
      135deg,
      rgba(34, 211, 238, 0.22),
      rgba(99, 102, 241, 0.22)
    );

  color: ${cores.branco};

  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.7px;

  box-shadow:
    0 10px 30px rgba(34, 211, 238, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
`

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3px;

  strong {
    color: ${cores.texto};

    font-size: 15px;
    font-weight: 800;
  }

  span {
    color: ${cores.textoSecundario};

    font-size: 11px;
  }
`

export const Navigation = styled.nav`
  margin-bottom: 28px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const NavLabel = styled.p`
  margin: 0 10px 10px;

  color: #64748b;

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 1.2px;
  text-transform: uppercase;
`

export const NavItem = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;

  gap: 10px;

  min-height: 46px;

  padding: 0 12px;

  border: 1px solid
    ${({ $active }) =>
    $active ? 'rgba(34, 211, 238, 0.13)' : 'transparent'};

  border-radius: 12px;

  background: ${({ $active }) =>
    $active
      ? 'rgba(34, 211, 238, 0.07)'
      : 'transparent'};

  color: ${({ $active }) =>
    $active ? cores.branco : cores.textoSecundario};

  font-size: 13px;
  font-weight: 650;
`

export const NavIcon = styled.span`
  color: ${cores.verde};

  font-size: 17px;
`

export const NavCount = styled.span`
  min-width: 25px;

  margin-left: auto;
  padding: 3px 7px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.06);

  color: ${cores.cinzaClaro};

  font-size: 10px;
  text-align: center;
`

export const Overview = styled.div`
  margin-top: auto;
  margin-bottom: 18px;

  padding: 18px;

  border: 1px solid ${cores.borda};
  border-radius: 16px;

  background:
    linear-gradient(
      135deg,
      rgba(129, 140, 248, 0.09),
      rgba(34, 211, 238, 0.04)
    );

  @media (max-width: 900px) {
    display: none;
  }
`

export const OverviewLabel = styled.p`
  margin-bottom: 10px;

  color: ${cores.textoSecundario};

  font-size: 11px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.8px;
`

export const OverviewNumber = styled.strong`
  display: block;

  margin-bottom: 5px;

  color: ${cores.branco};

  font-size: 30px;
  font-weight: 800;

  letter-spacing: -1px;
`

export const OverviewText = styled.p`
  color: ${cores.textoSecundario};

  font-size: 11px;
  line-height: 1.5;
`

export const BotaoNovo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  width: 100%;
  min-height: 48px;

  border: 1px solid rgba(34, 211, 238, 0.35);
  border-radius: 13px;

  background:
    linear-gradient(
      135deg,
      ${cores.verdeEscuro},
      ${cores.azulEscuro}
    );

  color: ${cores.branco};

  font-size: 13px;
  font-weight: 800;

  box-shadow: 0 12px 30px rgba(6, 182, 212, 0.13);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    filter: brightness(1.08);

    box-shadow: 0 16px 34px rgba(6, 182, 212, 0.18);
  }

  @media (max-width: 900px) {
    max-width: 210px;
  }

  @media (max-width: 520px) {
    max-width: none;
  }
`

export const PlusIcon = styled.span`
  font-size: 19px;
  font-weight: 400;
  line-height: 1;
`

export const FooterNote = styled.div`
  display: flex;
  align-items: center;

  gap: 7px;

  margin-top: 17px;
  padding-left: 4px;

  color: #64748b;

  font-size: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const StatusDot = styled.span`
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #34d399;

  box-shadow: 0 0 10px rgba(52, 211, 153, 0.75);
`