const portifolio = [
{image_url: "./images/foto_1.jpg", title: "Image 01"},
{image_url: "./images/foto_2.jpg", title: "Image 02"},
{image_url: "./images/foto_3.jpg", title: "Image 03"},
{image_url: "./images/foto_4.jpg", title: "Image 04"},
{image_url: "./images/foto_5.jpg", title: "Image 05"},
{image_url: "./images/foto_6.jpg", title: "Image 06"},
{image_url: "./images/foto_7.jfif", title: "Image 07"},
];

const portifolioContainer = document.getElementById('portifolio-container')

for (let index = 0 ; index < portifolio.length; index +=1) {
    const { image_url, title } = portifolio[index];
    const wrapper = document.createElement("div");
    const card = document.createElement("div");
}
