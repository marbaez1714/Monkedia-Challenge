import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../images/logo.png'
import '../App.css';

export default function Header(props) {
    return (
        <div className='headerDiv'>
            <Container>
                <Row>
                    <Col xs={{ size: '1' }}>
                        <img className='logo' src={Logo} alt='nhr' />
                    </Col>
                    <Col xs='11'>
                        <h1 className='headerTitle'>MagO7</h1>
                        <p className="tagline">A GENTLE DIGESTIVE CLEANSE</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}