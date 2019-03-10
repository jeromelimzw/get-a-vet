import React from "react";
import { Table } from "reactstrap";
import { getZone, getDistrict } from "./static/postalCodeToRegion";

const AddressDisplay = ({ addresses, selectAddressHandler }) => {
  return (
    <Table default className="tc">
      <thead>
        <tr>
          <th>Name</th>
          <th>Zone</th>
          <th>District</th>
          <th>Address</th>
          <th>Postal Code</th>
          <th>Type</th>
          <th>Office Tel.</th>
          <th>Directions</th>
        </tr>
      </thead>
      <tbody>
        {addresses.map(a => (
          <React.Fragment key={a._id}>
            <tr>
              <td
                onClick={selectAddressHandler}
                value={a._id}
                className="pointer"
              >
                {a.name}
              </td>
              <td>{getZone(a.postal_code)}</td>
              <td>{getDistrict(a.postal_code)}</td>
              <td
                onClick={selectAddressHandler}
                value={a._id}
                className="pointer"
              >
                {a.address}
              </td>
              <td>{a.postal_code}</td>
              <td>{a.type}</td>
              <td>
                <a href={`tel:${a.tel_office_1}`}>{a.tel_office_1}</a>
              </td>
              <td>
                <a
                  href={`https://www.google.com/maps/dir/Current+Location/Singapore+${
                    a.post_Code
                  }`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fas fa-map-marker-alt f3 pointer"
                    value={a._id}
                    onClick={selectAddressHandler}
                  />
                </a>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default AddressDisplay;
