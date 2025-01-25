import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(10rem, 90vw, 50rem);
  padding: 1.5rem;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 1440px) {
    padding: 2.5rem;
    width: 100%;
  }
`

export const TextSection = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const Heading = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};

  @media (min-width: 1440px) {
    font-size: 1rem;
  }
`

export const Paragraph = styled.p`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  @media (min-width: 1440px) {
    font-size: 0.875rem;
  }
`

export const OptionsSection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .checked {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme['purple-dark']};
  }

  @media (min-width: 650px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

export const Option = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: solid 2px transparent;
  border-radius: 8px;
  transition: 300ms;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    box-shadow: none;
  }

  @media (min-width: 1440px) {
    width: 33%;
  }
`

export const OptionLabel = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 0.85rem;
  text-transform: uppercase;
`

export const IconContainer = styled.span`
  svg {
    margin-top: 0.2rem;
    color: ${(props) => props.theme['purple-medium']};
  }
`
