// Header

import { Options } from "../../components/Option.mjs";
import {
  BreweryInformation,
  breweryTypes,
  tableFields,
  tableHeading,
} from "../../content/BreweryInformation.mjs";

export const Header = () => `
<div class="row header-row">
    <div class="col-12">
        <h1 class="text-center find-brew">${BreweryInformation.title}</h1>
    </div>

    <div class="col-8 offset-2  col-lg-4 offset-lg-4 breweries d-none d-lg-block">
        <p class="text-center mt-4 content">${BreweryInformation.content}</p>
    </div>
</div>


<div class="row sm-device-info">
    <div class="col-12  breweries d-block d-lg-none">
      <p class="text-center mt-4 content-sm">${BreweryInformation.content}</p>
  </div>
`;

export const BreweriesTable = () => {
  const header = tableFields
    .map((field) => {
      return field === "Address"
        ? `<th scope="col" class="d-none d-lg-block">${field}</th>`
        : `<th scope="col">${field}</th>`;
    })
    .join("");

  return `
      <section class="row results ">
      <table class="table table-striped table-dark col-10">
        <thead>
          <tr>
            <th colspan="${tableFields.length}">
              <h3 class="text-center">${tableHeading}</h3>
            </th>
          </tr>
          <tr id="fields">
            ${header}
          </tr>
        </thead>
        <tbody class="result-T">
        </tbody>
      </table>
    <section class="row results ">
    `;
};

export const SearchContainer = () => {
  return `
        <section class="search-container row  ">
            <select class="col-12 col-lg-4 brewery-type mt-4 ms-lg-5" name="Brewery-type">
                <option disabled selected>Select Brewery type</option>
                ${Options(breweryTypes)}
            </select>

            <input class=" col-12 col-lg-4 search-input search state mt-4 ms-0 ms-lg-4 " type="text" placeholder="Search State" name="search">

            <input class=" col-12 col-lg-3 search-input search name mt-4  ms-lg-4" type="text" placeholder="Search Brewery name"name="search">

            <div class="col-12 col-lg-12 map mt-5">
                <div id="maps" style="height: 100%;"></div>
            </div>
        </section>
    `;
};

export const TableResult = (result) => {
  const { name, street, state, city, brewery_type, website_url } = result;
  return `
      <tr>
        <td>${name ? name : "Unkown"}</td>
        <td>${city && state ? `${state}: ${city}` : "Unkown"}</td>
        <td class="d-none d-lg-block">${street ? street : "Unkown"}</td>
        <td>${brewery_type ? brewery_type : "Unkown"}</td>
        <td><a href="${
          website_url ? website_url : "Unkown"
        }">Go to website</a></td>
      </tr>
    `;
};
