import React from "react"
import { Composition } from "atomic-layout"
import { Button, Image, Card, Text } from "../../components"

const areasMobile =`
thumbnail
content
actions
`

const areaTablet = `
  thumbnail heading
  thumbnail actions
`

const Item = ({ title, contents, imageUrl}) => (
    <Card>
        <Composition
            template={areasMobile}
            templateMd={areaTablet}
            templateLg={areasMobile}
            templateColsMdOnly="minmax(100px, 1fr) 1fr"
            padding={15}
            gutter={15}
            gutterLg={25}>
                {({ Thumbnail, Content, Actions }) => (
                    <>
                    <Thumbnail>
                        <Image src={imageUrl} alt={title} />
                    </Thumbnail>
                    <Content>
                        <h3>{title}</h3>
                        <Text>
                            {contents}
                        </Text>
                    </Content>
                    <Actions flex align="flex-end">
                        <Button wide>Go!!</Button>
                    </Actions>
                    </>
                )}
        </Composition>
    </Card>
)

export default Item