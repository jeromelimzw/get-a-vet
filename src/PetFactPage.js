import { getCatFact } from "./static/catfact";
import { getDogFact } from "./static/dogfact";
import { Card, Button, CardTitle, CardText, CardImg } from "reactstrap";
import React, { Component } from "react";

class PetFactPage extends Component {
  constructor(props) {
    super(props);
    this.state = { catfact: "", dogfact: "" };
  }

  componentDidMount() {
    this.setState({ catfact: getCatFact(), dogfact: getDogFact() });
  }

  handleCatFact = () => {
    this.setState({ catfact: getCatFact() });
  };

  handleDogFact = () => {
    this.setState({ dogfact: getDogFact() });
  };

  render() {
    const { dogfact, catfact } = this.state;
    const { handleCatFact, handleDogFact } = this;
    return (
      <React.Fragment>
        <div className="flex ma3">
          <Card
            body
            inverse
            color="primary"
            className="w-30 center tc justify-between"
          >
            <CardTitle className="f2 fw7">Random Cat Fact</CardTitle>
            <CardImg />
            <CardText>{catfact}</CardText>
            <Button onClick={handleCatFact}>Next Fact</Button>
          </Card>
          <Card
            body
            inverse
            color="success"
            className="w-30 center tc justify-between"
          >
            <CardTitle className="f2 fw7">Random Dog Fact</CardTitle>
            <CardImg />
            <CardText>{dogfact}</CardText>
            <Button onClick={handleDogFact}>Next Fact</Button>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default PetFactPage;
