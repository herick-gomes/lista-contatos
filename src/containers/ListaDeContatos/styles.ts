import styled from 'styled-components'

import { cores } from '../../styles/variaveis'

export const Container = styled.main`
  position: relative;

  min-width: 0;
  min-height: 100vh;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 82% 8%,
      rgba(34, 211, 238, 0.07),
      transparent 24%
    ),
    radial-gradient(
      circle at 20% 85%,
      rgba(99, 102, 241, 0.08),
      transparent 28%
    );

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: 0.2;

    background-image:
      linear-gradient(
        rgba(148, 163, 184, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(148, 163, 184, 0.03) 1px,
        transparent 1px
      );

    background-size: 44px 44px;

    mask-image:
      linear-gradient(
        to bottom,
        black,
        transparent 75%
      );
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;

  width: min(1180px, 100%);

  margin: 0 auto;
  padding: 58px 54px 80px;

  @media (max-width: 1100px) {
    padding: 46px 34px 70px;
  }

  @media (max-width: 600px) {
    padding: 34px 18px 54px;
  }
`

export const TopBar = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 30px;

  margin-bottom: 42px;

  @media (max-width: 650px) {
    align-items: flex-start;
    flex-direction: column;

    gap: 18px;

    margin-bottom: 30px;
  }
`

export const Eyebrow = styled.p`
  margin-bottom: 9px;

  color: ${cores.verde};

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 1.8px;
`

export const Titulo = styled.h1`
  color: ${cores.texto};

  font-size: clamp(36px, 5vw, 54px);
  font-weight: 800;
  line-height: 1;

  letter-spacing: -2px;
`

export const Subtitle = styled.p`
  max-width: 520px;

  margin-top: 13px;

  color: ${cores.textoSecundario};

  font-size: 14px;
  line-height: 1.65;
`

export const HeaderStat = styled.div`
  min-width: 150px;

  padding: 15px 18px;

  border: 1px solid ${cores.borda};
  border-radius: 15px;

  background: rgba(15, 23, 42, 0.54);

  backdrop-filter: blur(12px);

  @media (max-width: 650px) {
    min-width: 0;
  }
`

export const StatValue = styled.strong`
  display: block;

  color: ${cores.branco};

  font-size: 22px;
  font-weight: 800;

  line-height: 1;
`

export const StatLabel = styled.span`
  display: block;

  margin-top: 6px;

  color: ${cores.textoSecundario};

  font-size: 10px;
`

export const Toolbar = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  margin-bottom: 28px;

  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column;

    gap: 10px;
  }
`

export const SearchBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  flex: 1;

  max-width: 620px;

  min-height: 50px;

  border: 1px solid ${cores.borda};
  border-radius: 14px;

  background: rgba(15, 23, 42, 0.6);

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:focus-within {
    border-color: ${cores.bordaForte};

    background: rgba(15, 23, 42, 0.82);

    box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.06);
  }
`

export const SearchIcon = styled.span`
  display: grid;
  place-items: center;

  width: 48px;

  flex-shrink: 0;

  color: #64748b;
`

export const SearchInput = styled.input`
  width: 100%;
  min-width: 0;

  padding: 0 12px 0 0;

  border: 0;
  outline: 0;

  background: transparent;
  color: ${cores.texto};

  font-size: 13px;

  &::placeholder {
    color: #64748b;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`

export const ClearSearch = styled.button`
  width: 34px;
  height: 34px;

  margin-right: 7px;

  flex-shrink: 0;

  border: 0;
  border-radius: 9px;

  background: transparent;
  color: ${cores.textoSecundario};

  font-size: 20px;

  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: ${cores.branco};
  }
`

export const ResultCount = styled.span`
  color: #64748b;

  font-size: 11px;
  font-weight: 700;

  white-space: nowrap;
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 16px;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
`

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 76px 24px;

  border: 1px dashed rgba(148, 163, 184, 0.2);
  border-radius: 20px;

  background: rgba(15, 23, 42, 0.35);

  text-align: center;
`

export const EmptyIcon = styled.div`
  display: grid;
  place-items: center;

  width: 54px;
  height: 54px;

  margin-bottom: 18px;

  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 17px;

  background: rgba(34, 211, 238, 0.06);

  color: ${cores.verde};

  font-size: 26px;
`

export const EmptyTitle = styled.h2`
  color: ${cores.texto};

  font-size: 18px;
`

export const EmptyDescription = styled.p`
  max-width: 410px;

  margin-top: 8px;

  color: ${cores.textoSecundario};

  font-size: 13px;
  line-height: 1.6;
`

export const EmptyAction = styled.button`
  min-height: 40px;

  margin-top: 20px;
  padding: 0 17px;

  border: 1px solid ${cores.bordaForte};
  border-radius: 10px;

  background: rgba(34, 211, 238, 0.07);

  color: ${cores.verde};

  font-size: 12px;
  font-weight: 800;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);

    background: rgba(34, 211, 238, 0.12);
  }
`