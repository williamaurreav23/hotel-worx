import React, { Component } from "react";
import { Row, Col } from 'react-grid-system';
import "./style2.css";
import logo from './solidcolor.png';
import MyComponent from "../../components/calendar"
import Select from 'react-select';

class Billing extends Component {
    // Setting the initial values of this.state.username and this.state.password
    state = {
        name: "",
        lastname: "",
        phonenumber: "",
        address: {
            street: "",
            state: "",
            city: "",
            zipcode: ""
        },
        arrivaldate: "",
        departuredate: "",
        nights: "",
        adults: "",
        noOfRooms: "",
        roomType: "",
        creditCard: "",
        expirationDate: "",
        selectedOption: ["Two Quenns", "King Single", "Suite"],
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    }


    // handle any changes to the input fields
    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    }

    // When the form is submitted, prevent the default event and alert the username and password
    handleFormSubmit = event => {
        event.preventDefault();
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        this.setState({ username: "", password: "" });
    }
    render() {

        const { options } = [
            { value: "Two Queens", label: "Two Queens" },
            { value: "King", label: "King" },
            { value: "Suite", label: "Suite" },

        ];
        const { selectedOption } = this.state;

        return (

            <Row id="dashboardTable1">
                <Col sm={2} id="infoPart">
                    <img src={logo} className="App-logo" id="logo" alt="logo" />
                    <h5>User Name</h5><br></br>
                    <MyComponent></MyComponent><br></br>
                    <h5>Weather</h5><br></br>
                    <i className="fa fa-gear" style={{ fontSize: '28px' }} />
                </Col>
                <Col sm={10}>
                    <row>
                        <form>
                            <div id="header">
                                <button id="exit" onClick={this.handleFormSubmit}>x</button>
                                <h2>Cashiering</h2>
                            </div>
                            <div id="res">
                                <tr>
                                    <td><p>Room Number</p></td>
                                    <td><input
                                        id="smallWindow"
                                        onChange={this.handleChange}
                                        options={selectedOption}
                                        name="roomNumber"
                                        placeholder="Room Number"
                                        value={this.state.roomNumber}
                                        onChange={this.handleInputChange}
                                    /></td>
                                    <td><p>Name</p></td>
                                    <td><input
                                        type="text"
                                        placeholder="Name"
                                        name="guestname"
                                        value={this.state.guestname}
                                        onChange={this.handleInputChange}
                                    /></td>
                                    <td><p>Last Name</p></td>
                                    <td><input
                                        type="text"
                                        placeholder="Last Name"
                                        name="guestlastname"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                    /></td>

                                </tr>
                                <tr>
                                    <td><p>Stay Over</p></td>
                                    <input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click event occured')" />

                                    <td><p>Due Out</p></td>
                                    <input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click event occured')" />

                                    <td><p>Checked Out</p></td>
                                    <input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click event occured')" />
                                    <td>
                                        <button id="searchButton"  onClick={this.handleFormSubmit}>Search</button>
                                    </td>
                                </tr>
                            </div>
                        </form>
                        <div id="guestinfo">
                            <table id="result">
                                <thead>
                                    <tr>
                                        <th className="th" id="room number">Room Number</th>
                                        <th className="th" >Name</th>
                                        <th className="th" id="arrival date">Arrival Date</th>
                                        <th className="th" id="departure date">Departure Date</th>
                                        <th className="th" id="balance">Balance</th>
                                        <th className="th" id="status">Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- Results from DB here --> */}
                                </tbody>
                            </table>

                        </div>
                    </row>
                </Col >
            </Row >
        )
    }
}

export default Billing;