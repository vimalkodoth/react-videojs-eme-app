import "./footer.css";
import img from "./icon.jpg";

console.log(img);
var element = document.createElement("img");

element.src = img;

element.width = 100;
element.height = 100;

document.body.append(element);
