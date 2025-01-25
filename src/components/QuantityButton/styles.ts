import styled from 'styled-components'

export const QuantityButtonContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 8px;
  padding: 0.45rem;

  > svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple-medium']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const QuantityLabel = styled.p`
  color: ${(props) => props.theme['base-title']};
`

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  > svg {
    color: ${(props) => props.theme['purple-medium']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
