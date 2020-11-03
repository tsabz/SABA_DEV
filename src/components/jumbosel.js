import React from 'react'
import GAlogo from '../assests/ga_logo.jpg'
import DJ from '../assests/dj.jpg'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbocard from '../components/jumbocard.js'


class Jumbosel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    imgSrc: GAlogo,
                    description: 'Graduated from the Software Engireeing immersive program July 2020'
                },
                {
                    id: 1,
                    imgSrc: DJ,
                    description: 'Before the software development, I was a DJ and Music Producer'
                }                
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Jumbocard item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="Justify-content-around justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }




}


export default Jumbosel