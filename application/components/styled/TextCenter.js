import styled from 'styled-components'

const TextCenter = styled.Text`
    text-align: center;
    font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '18px'};
    color: ${({ color }) => color ? `${color}` : '#000'};
    text-decoration: ${({ decoration }) => decoration ? decoration : 'none'};
`

export default TextCenter