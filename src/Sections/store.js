import React from 'react';
import { Container, Row, Col, Button, UncontrolledCarousel } from 'reactstrap';
import pills180 from '../images/pill-180.png'
import pills90 from '../images/pills-90.png'
import pills30 from '../images/pills-30.png'
import powder from '../images/powder.png'
import image1 from '../images/img1.jpg'
import '../App.css';

function StoreItem(props) {
    return (
        <Col className='storeCard' md='3' xs='6'>
            <div>
                <div className='imageBackground'>
                    <img className='pillImage' src={props.image} alt='NHR' />
                </div>
                <div className='footerContainer'>
                    <div className="productInfo">
                        <div className="productTitle">{props.title}</div>
                        <div className='productSubtitle'>{props.subtitle}</div>
                    </div>
                    <a href={'https://shopnhr.com/cart/' + props.varId + ':1'}>
                        <Button className="addToCart" style={{ fontSize: "1.75vh", verticalAlign: 'top', borderRadius: '0', padding: '0.5vh', color: '#FFD600', backgroundColor: '#88A769' }}> Buy Now!</Button>
                    </a>
                </div>
            </div>
        </Col >
    )
}

export default function Store(props) {
    return (
        <Container className='storePage'>
            <Row className="productsDiv">
                <StoreItem image={pills180} title='Mag O7 Capsules' subtitle="180x - $39.95" varId='26152698951' />
                <StoreItem image={pills90} title='Mag O7 Capsules' subtitle="90x - $29.95" varId='26149112647' />
                <StoreItem image={pills30} title='Mag O7 Capsules' subtitle="30x - $17.95" varId='37109223434' />
                <StoreItem image={powder} title='Mag O7 Powder' subtitle="6.5oz - $36.95" varId='26152475143' />
            </Row>
        </Container >
    )
}