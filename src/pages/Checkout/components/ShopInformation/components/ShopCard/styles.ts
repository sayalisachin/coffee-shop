import styled, { keyframes } from 'styled-components'

const fadeOutLeft = keyframes`
  0% {  opacity: 1; transform: translateX(0); }
  100% { opacity: 0.2; transform: translateX(-50px); }
`

export const ShopCardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  transition: 300ms;

  &.remove-coffee {
    animation: ${fadeOutLeft} 1s linear forwards;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  width: 100%;
`

export const CardImage = styled.img`
  width: 4rem;
  height: auto;
`

export const ShopCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media (min-width: 480px) {
    width: 18rem;
  }

  @media (min-width: 1440px) {
    width: 100%;
  }
`

export const TextContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 480px) {
    justify-content: space-between;
    display: flex;
  }

  @media (min-width: 1440px) {
    justify-content: space-between;
    display: flex;
  }
`

export const CardLabel = styled.p`
  width: 60%;
  color: ${(props) => props.theme['base-subtitle']};

  @media (min-width: 480px) {
    width: auto;
  }

  @media (min-width: 1440px) {
    width: auto;
  }
`

export const CardPrice = styled.strong`
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`

export const ButtonsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  transition: 300ms;

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const RemoveLabel = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;
`
