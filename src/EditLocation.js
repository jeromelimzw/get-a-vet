import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { addLocation } from "./static/vet_locations";

class EditLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      type: "",
      fax: "",
      tel: "",
      postalcode: "",
      coordinates: ""
    };
  }

  handleCoordinates = async event => {
    try {
      this.setState({
        postalcode: event.target.value
      });
      const response = await fetch(
        `https://developers.onemap.sg/commonapi/search?searchVal=${
          event.target.value
        }&returnGeom=Y&getAddrDetails=N`
      );
      const data = await response.json();
      const longitude = data.results[0].LONGITUDE;
      const latitude = data.results[0].LATITUDE;
      this.setState({
        coordinates: [parseFloat(latitude), parseFloat(longitude)]
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newLocation = {
      name: this.state.name,
      fax_office: this.state.fax,
      postal_code: this.state.postalcode,
      address: this.state.address,
      _id: Math.round(Math.random() * 10000),
      type: this.state.type,
      tel_office: this.state.tel,
      coordinates: this.state.coordinates
    };

    addLocation(newLocation);

    alert(`${this.state.type} has been added.`);
    this.props.history.push("/");
  };
  render() {
    return (
      <Container>
        <h1>Edit / Add Location</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Vet / Hospital Name"
              onChange={this.handleUpdate}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Vet / Hospital Address"
              onChange={this.handleUpdate}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="postalcode">Postal Code</Label>
            <Input
              type="text"
              name="postalcode"
              id="postalcode"
              placeholder="Postal Code"
              onChange={this.handleCoordinates}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="type">Type</Label>
            <Input
              type="select"
              name="type"
              id="type"
              onChange={this.handleUpdate}
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Choose One
              </option>
              <option>Hospital</option>
              <option>Clinic</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="tel">Office Tel.</Label>
            <Input
              type="text"
              name="tel"
              id="tel"
              placeholder="Office Tel."
              onChange={this.handleUpdate}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="fax">Fax No.</Label>
            <Input
              type="text"
              name="fax"
              id="fax"
              placeholder="Office Fax"
              onChange={this.handleUpdate}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default EditLocation;
