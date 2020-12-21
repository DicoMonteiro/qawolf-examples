const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("todomvc", async () => {
  const page = await context.newPage();
  await page.goto("http://todomvc.com/examples/react/", { waitUntil: "domcontentloaded" });
  await page.click(".new-todo");
  await page.click(".new-todo");
  // await page.fill(".new-todo", "Create test!");
  await page.fill(".new-todo", process.env.TODO_VALUE);
  // Para executar com uma variavel passada em tempo de execucao
  // TODO_VALUE="Teste" npx qawolf test --headless todomvc
  await page.press(".new-todo", "Enter");
  await page.click(".toggle");
  await page.click(".clear-completed");
  // await qawolf.scroll(page, "html", { x: 0, y: 12 });
  // await page.click(".new-todo");
  // await qawolf.scroll(page, "html", { x: 0, y: 4 });
  // await page.fill(".new-todo", null);
  // await qawolf.scroll(page, "html", { x: 0, y: 0 });
  await page.fill(".new-todo", "Teste Adriano");
  await page.press(".new-todo", "Enter");
  await page.click(".toggle");
  await page.click(".clear-completed");
});