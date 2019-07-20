import React from "react";
import "./style.css";
import { Row, Col } from 'react-grid-system';


const DeatiledSubmit = props => {
    return (
        <Col xl={12}>
            <Row>
                <Col xl={10}>
                    <Row style={{marginBottom:"5px"}}>
                        <Col xl={2}><h5>Start Date</h5></Col>
                        <Col xl={3} >
                            <input
                                style={{ paddingTop: "0px", paddingBottom: "0px" }}
                                type="date"
                                name="arrivaldate"
                                onChange={props.handleStartDate}
                            />
                        </Col>
                        <Col xl={1}>Availability</Col>
                        <Col xl={1}>
                            <input
                                type="checkbox"
                                value= "available"
                                checked={props.availableChecked}
                                onChange={props.handleCheckbox}
                            />
                        </Col>
                        <Col xl={1}>Occupancy</Col>
                        <Col xl={1}>
                            <input
                                type="checkbox"
                                value= "occupied"
                                checked={props.occupiedChecked}
                                onChange={props.handleCheckbox}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col >

    )
}



export default DeatiledSubmit;