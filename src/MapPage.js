import React, { Component } from "react";
import { getLocations } from "./static/vet_locations";
import AddressDisplay from "./AddressDisplay";
import Map from "./Map";
import SearchBar from "./SearchBar";

class MapPage extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      selectedId: "",
      currLocation: [1.2835, 103.8468],
      mapCenter: [1.3521, 103.8198],
      zoom: 16,
      searchfield: ""
    };
  }

  componentDidMount() {
    this.updateLocations();
  }

  updateLocations = async () => {
    const filteredLocations = getLocations().filter(a =>
      a.name.toLowerCase().includes(this.state.searchfield)
    );
    await this.setState({ locations: filteredLocations });
  };

  selectAddressHandler = event => {
    this.state.selectedId ===
    parseInt(event.currentTarget.getAttribute("value"))
      ? this.setState({ selectedId: undefined })
      : this.setState({
          selectedId: parseInt(event.currentTarget.getAttribute("value"))
        });
  };

  handleSearchBar = async event => {
    await this.setState({ searchfield: event.target.value.toLowerCase() });
    await this.updateLocations();
  };

  render() {
    const { selectAddressHandler } = this;
    const { locations, selectedId, currLocation, mapCenter, zoom } = this.state;
    const selectedLocation = this.state.locations.filter(
      a => a._id === selectedId
    );

    return (
      <div className="App">
        <Map
          selectedLocation={selectedLocation}
          currLocation={currLocation}
          addresses={locations}
          zoom={zoom}
          mapCenter={mapCenter}
          selectAddressHandler={selectAddressHandler}
        />
        <SearchBar handleSearchBar={this.handleSearchBar} />
        <AddressDisplay
          addresses={locations}
          selectAddressHandler={selectAddressHandler}
        />
      </div>
    );
  }
}

export default MapPage;
