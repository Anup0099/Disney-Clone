import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Reccomended for You</h4>
            <Content>
            <Wrap>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </Wrap>
            </Content>
        </Container>
    )
}

export default Movies
const Container =styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4,minmax());

`

const Content = styled.div`


`

const Wrap =styled.div`
`