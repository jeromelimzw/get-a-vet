import React, { Component } from "react";
import vetLocations from "./static/vet_locations_5only";
import AddressDisplay from "./AddressDisplay";
import NavBar from "./NavBar";
import PetFactPage from "./PetFactPage";
import Map from "./Map";

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      selectedId: "",
      currLocation: [1.4512364, 103.8168724],
      mapCenter: [1.3521, 103.8198],
      zoom: 16
    };
  }

  componentDidMount() {
    this.setState({ locations: vetLocations });
  }

  selectAddressHandler = event => {
    this.state.selectedId ===
    parseInt(event.currentTarget.getAttribute("value"))
      ? this.setState({ selectedId: undefined })
      : this.setState({
          selectedId: parseInt(event.currentTarget.getAttribute("value"))
        });
  };

  render() {
    const { selectAddressHandler } = this;
    const { locations, selectedId, currLocation, mapCenter, zoom } = this.state;
    const selectedLocation = this.state.locations.filter(
      a => a._id === selectedId
    );

    return (
      <div className="App">
        <NavBar />
        <Map
          selectedLocation={selectedLocation}
          currLocation={currLocation}
          addresses={locations}
          zoom={zoom}
          mapCenter={mapCenter}
          selectAddressHandler={selectAddressHandler}
        />
        <AddressDisplay
          addresses={locations}
          selectAddressHandler={selectAddressHandler}
        />
        <PetFactPage />
      </div>
    );
  }
}

export default App;
