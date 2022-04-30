import { Dimmer, Loader as SemanticLoader, Segment, Image } from 'semantic-ui-react'

const Loader = () => {
    return (
        <div>
            <Segment>
                <Dimmer active inverted>
                    <SemanticLoader />
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        </div>
    )
}

export default Loader