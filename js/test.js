function AppendResults(result) {
    let display;

    switch (true) {
        case result[i].street === null:
            display = `
                <tr>
                    <td>${result[i].name}</td>
                    <td>${result[i].state ? `${result[i].state}, ` : ''}${result[i].city ? result[i].city : 'Unknown'}</td>
                    <td class="d-none d-lg-block">Unknown</td>
                    <td>${result[i].brewery_type}</td>
                    <td><a href="${result[i].website_url}">Go to website</a></td>
                </tr>
            `;
            break;
        case result[i].state === null:
            display = `
                <tr>
                    <td>${result[i].name}</td>
                    <td>${result[i].city}</td>
                    <td class="d-none d-lg-block">${result[i].street}</td>
                    <td>${result[i].brewery_type}</td>
                    <td><a href="${result[i].website_url}">Go to website</a></td>
                </tr>
            `;
            break;
        case result[i].city === null:
            display = `
                <tr>
                    <td>${result[i].name}</td>
                    <td>${result[i].state}</td>
                    <td class="d-none d-lg-block">${result[i].street}</td>
                    <td>${result[i].brewery_type}</td>
                    <td><a href="${result[i].website_url}">Go to website</a></td>
                </tr>
            `;
            break;
        case result[i].website_url === null:
            display = `
                <tr>
                    <td>${result[i].name}</td>
                    <td>${result[i].state ? `${result[i].state}, ` : ''}${result[i].city ? result[i].city : 'Unknown'}</td>
                    <td class="d-none d-lg-block">${result[i].street}</td>
                    <td>${result[i].brewery_type}</td>
                    <td>Unknown</td>
                </tr>
            `;
            break;
        default:
            display = `
                <tr>
                    <td>${result[i].name}</td>
                    <td>${result[i].state ? `${result[i].state}, ` : ''}${result[i].city ? result[i].city : 'Unknown'}</td>
                    <td class="d-none d-lg-block">${result[i].street}</td>
                    <td>${result[i].brewery_type}</td>
                    <td><a href="${result[i].website_url}">Go to website</a></td>
                </tr>
            `;
            break;
    }

    return display;
}
