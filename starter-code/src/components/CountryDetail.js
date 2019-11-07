import React from "react";
import { Link } from "react-router-dom";
import countryJson from "../countries.json";

const getCountry = code => {
  return countryJson.find(country => country.cca3 === code);
};

export default function CountryDetail(props) {
  const currentCountry = getCountry(props.match.params.id);
  return (
    <div>
      <h1>{currentCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{currentCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {currentCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {currentCountry.borders.map((border, i) => {
                  const borderCountry = getCountry(border);
                  return (
                    <li key={i}>
                      <Link to={border}>{borderCountry.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
