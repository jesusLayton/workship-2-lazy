/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registrarImagen } from "./lazi.js";

//creaqr una imagesn
const maximo = 123;
const minimo = 1;
const ramdom = () =>Math.floor(Math.random()*((maximo-minimo+1)+minimo))


const createImageNode = () => {
    const container = document.createElement("div");
    container.className="p-4";
    const imagen = document.createElement("img"); 
    imagen.className ="mx-auto";
    imagen.width='320';
    imagen.dataset.src =`https://randomfox.ca/images/${ramdom()}.jpg`;

    container.appendChild(imagen);

    

    return container;

};

//const nuevaImagen =createImageNode();
const muntNodre = document.getElementById("images");

const button = document.querySelector("button");
const addImage = () =>{
    const newImage = createImageNode();
    muntNodre.append(newImage);
    registrarImagen(newImage);
};



button.addEventListener("click",addImage);


