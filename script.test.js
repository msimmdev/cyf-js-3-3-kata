const { JSDOM } = require("jsdom");
const path = require("path");

let page = null;

beforeEach(async () => {
    page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
        resources: "usable",
        runScripts: "dangerously"
    });
});

afterEach(() => {
    page = null;
});

describe("Calculator Tests", () => {
    test("Renders the page", () => {
        expect(page.window.document.getElementById('title').textContent).toEqual("Simple Calculator")
    });
});