const news = {
  title: `Minecraft's new frogs were briefly swallowing goats whole`,
  headerBgSrc: `https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg.webp`,
  category: "Minecraft",
  body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
  date: "2025-02-01",
};

/*const article = document.querySelector("#newsName");
article.innerHTML = `
   <h1>${news.title}</h1>
   <h2>${news.category}</h2>
   <p>${news.body}</p>
   <span>${news.date}</span> 
`;
*/

const newsTitleEl = document.querySelector(".newsTitle");
newsTitleEl.textContent = news.title;

const newsCategoryEl = document.querySelector(".newsCategory");
newsCategoryEl.textContent = news.category;

const newsBodyEl = document.querySelector(".newsBody");
newsBodyEl.textContent = news.body;

const newsDateEl = document.querySelector(".newsDate");
newsDateEl.textContent = news.date;

const bgSrc = {
  src: "https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg.webp",
  alt: "bg",
};
const bgImgEl = document.querySelector(".bg");
bgImgEl.src = bgSrc.src;
bgImgEl.alt = bgSrc.alt;
bgImgEl.style.width = "100%";
