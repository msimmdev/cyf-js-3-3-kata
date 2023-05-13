const { JSDOM } = require("jsdom");
const path = require("path");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });
});

afterEach(() => {
  page = null;
});

describe("Calculator Tests", () => {
  test("Renders the page", () => {
    expect(page.window.document.title).toEqual("Simple Calculator");
  });

  test("Has a dropdown", () => {
    let calcSelect = page.window.document.querySelector("select");
    expect(calcSelect).not.toBeNull();
  });

  test("Has required options", () => {
    let calcSelect = page.window.document.querySelector("select");
    let calcOptions = calcSelect.querySelectorAll("option");
    let firstOption = calcOptions[0];
    let secondOption = calcOptions[1];
    let thirdOption = calcOptions[2];
    expect(calcOptions.length).toEqual(3);
    expect(firstOption.value).toEqual("");
    expect(firstOption.textContent).toEqual("");
    expect(secondOption.value).toEqual("Add");
    expect(secondOption.textContent).toEqual("Add");
    expect(thirdOption.value).toEqual("Multiply");
    expect(thirdOption.textContent).toEqual("Multiply");
  });
});
