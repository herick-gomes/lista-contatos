import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles/variaveis'

export const Page = styled.main`
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 8% 15%,
      rgba(99, 102, 241, 0.12),
      transparent 28%
    ),
    radial-gradient(
      circle at 92% 82%,
      rgba(34, 211, 238, 0.08),
      transparent 25%
    ),
    ${cores.fundo};

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: 0.22;

    background-image:
      linear-gradient(
        rgba(148, 163, 184, 0.035) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(148, 163, 184, 0.035) 1px,
        transparent 1px
      );

    background-size: 46px 46px;

    mask-image:
      linear-gradient(
        135deg,
        black,
        transparent 75%
      );
  }
`

export const BackgroundGlowOne = styled.div`
  position: absolute;

  width: 420px;
  height: 420px;

  top: -210px;
  right: 15%;

  pointer-events: none;

  border-radius: 50%;

  background: rgba(34, 211, 238, 0.08);

  filter: blur(90px);
`

export const BackgroundGlowTwo = styled.div`
  position: absolute;

  width: 380px;
  height: 380px;

  bottom: -220px;
  left: 8%;

  pointer-events: none;

  border-radius: 50%;

  background: rgba(99, 102, 241, 0.1);

  filter: blur(90px);
`

export const Container = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns:
    minmax(320px, 0.85fr)
    minmax(440px, 1.15fr);

  width: min(1240px, calc(100% - 64px));
  min-height: 100vh;

  margin: 0 auto;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;

    width: min(680px, calc(100% - 40px));
  }

  @media (max-width: 520px) {
    width: calc(100% - 28px);
  }
`

export const SideContent = styled.aside`
  display: flex;
  flex-direction: column;

  min-width: 0;

  padding: 42px 54px 42px 10px;

  @media (max-width: 1050px) {
    padding-right: 34px;
  }

  @media (max-width: 920px) {
    padding: 28px 0 34px;
  }
`

export const Brand = styled(Link)`
  display: flex;
  align-items: center;

  gap: 12px;

  width: fit-content;
`

export const BrandMark = styled.div`
  display: grid;
  place-items: center;

  width: 46px;
  height: 46px;

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
    0 12px 30px rgba(34, 211, 238, 0.08),
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

export const SideMain = styled.div`
  max-width: 470px;

  margin: auto 0;

  padding: 70px 0;

  @media (max-width: 920px) {
    max-width: none;

    padding: 64px 0 20px;
  }

  @media (max-width: 600px) {
    padding-top: 48px;
  }
`

export const Eyebrow = styled.p`
  margin-bottom: 14px;

  color: ${cores.verde};

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 1.8px;
`

export const SideTitle = styled.h1`
  max-width: 450px;

  color: ${cores.texto};

  font-size: clamp(38px, 5vw, 58px);
  font-weight: 800;
  line-height: 1.04;

  letter-spacing: -2.3px;

  span {
    color: ${cores.verde};
  }
`

export const SideDescription = styled.p`
  max-width: 430px;

  margin-top: 20px;

  color: ${cores.textoSecundario};

  font-size: 14px;
  line-height: 1.75;
`

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 13px;

  margin-top: 38px;
`

export const Feature = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  padding: 13px 14px;

  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 13px;

  background: rgba(15, 23, 42, 0.28);

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: rgba(34, 211, 238, 0.16);

    background: rgba(15, 23, 42, 0.48);
  }

  div:last-child {
    display: flex;
    flex-direction: column;

    gap: 3px;
  }

  strong {
    color: ${cores.cinzaClaro};

    font-size: 11px;
    font-weight: 750;
  }

  span {
    color: #64748b;

    font-size: 10px;
    line-height: 1.45;
  }
`

export const FeatureIcon = styled.div`
  display: grid !important;
  place-items: center;

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  border: 1px solid rgba(34, 211, 238, 0.13);
  border-radius: 11px;

  background: rgba(34, 211, 238, 0.05);

  color: ${cores.verde};
`

export const SideFooter = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  color: #64748b;

  font-size: 10px;

  @media (max-width: 920px) {
    display: none;
  }
`

export const StatusDot = styled.span`
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #34d399;

  box-shadow: 0 0 10px rgba(52, 211, 153, 0.7);
`

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;

  padding: 52px 0 52px 54px;

  @media (max-width: 1050px) {
    padding-left: 34px;
  }

  @media (max-width: 920px) {
    padding: 0 0 50px;
  }
`

export const FormCard = styled.div`
  position: relative;

  width: 100%;
  max-width: 610px;

  padding: 34px;

  overflow: hidden;

  border: 1px solid ${cores.borda};
  border-radius: 24px;

  background:
    linear-gradient(
      145deg,
      rgba(17, 26, 46, 0.88),
      rgba(9, 14, 29, 0.8)
    );

  backdrop-filter: blur(24px);

  box-shadow:
    0 35px 90px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  &::before {
    content: '';

    position: absolute;

    width: 210px;
    height: 210px;

    top: -135px;
    right: -95px;

    pointer-events: none;

    border-radius: 50%;

    background: rgba(34, 211, 238, 0.12);

    filter: blur(42px);
  }

  @media (max-width: 520px) {
    padding: 25px 20px;

    border-radius: 19px;
  }
`

export const FormHeader = styled.header`
  position: relative;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  gap: 7px;

  margin-bottom: 31px;

  color: ${cores.textoSecundario};

  font-size: 11px;
  font-weight: 700;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  span {
    color: ${cores.verde};

    font-size: 15px;
  }

  &:hover {
    transform: translateX(-2px);

    color: ${cores.branco};
  }
`

export const FormIcon = styled.div`
  display: grid;
  place-items: center;

  width: 48px;
  height: 48px;

  margin-bottom: 19px;

  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      rgba(34, 211, 238, 0.1),
      rgba(99, 102, 241, 0.08)
    );

  color: ${cores.verde};
`

export const FormEyebrow = styled.p`
  margin-bottom: 8px;

  color: #64748b;

  font-size: 9px;
  font-weight: 800;

  letter-spacing: 1.5px;
`

export const Title = styled.h2`
  color: ${cores.texto};

  font-size: clamp(27px, 4vw, 35px);
  font-weight: 800;

  letter-spacing: -1.3px;
`

export const Subtitle = styled.p`
  max-width: 470px;

  margin-top: 10px;

  color: ${cores.textoSecundario};

  font-size: 12px;
  line-height: 1.7;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  margin: 27px 0;

  background:
    linear-gradient(
      90deg,
      ${cores.borda},
      rgba(148, 163, 184, 0.04)
    );
`

export const PrivacyNote = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  margin-top: 26px;
  padding-top: 19px;

  border-top: 1px solid rgba(148, 163, 184, 0.08);

  color: #64748b;

  font-size: 9px;
  line-height: 1.5;
`

export const PrivacyIcon = styled.span`
  flex-shrink: 0;

  color: ${cores.verde};

  font-size: 15px;
`