import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Star_cluster from '../assests/star_cluster.jpg'
import Jumbosel from '../components/jumbosel.js';


import Stars from './stars.js'


function Jumbo(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-5">
            <Container fluid={true}>
            <Row className="justify-content-center py-5">
            <Stars/>
            </Row> 
            
    <Button className="button" href="https://github.com/tsabz" target="_blank" rel="noopener noreferrer" variant="light" size="lg" block>Github</Button>
            
                <Row className="justify-content-center py-5">
                    <Jumbosel />
                    </Row>
            </Container>
        </Jumbotron>
        
    )
}

export default Jumbo