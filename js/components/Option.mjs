export const Options = (data) => {
    return data
      .map(
        (item) =>
          `<option value="${item}">${item.charAt(0).toUpperCase() + item.slice(1)}</option>`
      )
      .join("");
  };
  