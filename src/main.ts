import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

const pages = {
  login: [Pages.LoginPage],
  signin: [Pages.SigninPage],
};

Object.entries(Components).forEach(([name, template]) => {
  Handlebars.registerPartial(name, template);
});

Object.entries(Components).forEach(([name, template]) => {
  Handlebars.registerPartial(name, template);
});

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById("app")!;

  const temlpatingFunction = Handlebars.compile(source);
  console.log("html", temlpatingFunction(context));
  container.innerHTML = temlpatingFunction(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("signin"));
