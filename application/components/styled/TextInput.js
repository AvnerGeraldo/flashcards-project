import styled from 'styled-components'

const TextInput = styled.TextInput`
    border: 2px solid ${({ borderColor }) => borderColor || '#000'};
    text-decoration: underline;
    padding: 10px;
    border-radius: 5px;
`

export default TextInput