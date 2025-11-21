const news = {
  title: `Minecraft's new frogs were briefly swallowing goats whole`,
  headerBgSrc: `https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg.webp`,
  category: "Minecraft",
  body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
  date: "2025-02-01",
};

const newsCardEl = document.createElement("article");
newsCardEl.classList.add("newsCard");
document.body.append(newsCardEl);

const newsImg = document.createElement("img");
newsImg.src = news.headerBgSrc;
newsImg.alt = `${news.category}`;
newsImg.classList.add("imgCard");
newsCardEl.append(newsImg);

const newsNameEl = document.createElement("h1");
newsNameEl.classList.add("newsName");
newsNameEl.textContent = `${news.category}`;
newsCardEl.append(newsNameEl);

const newsCategoryEl = document.createElement("h2");
newsCategoryEl.classList.add("category");
newsCategoryEl;
newsCardEl.append(newsCategoryEl);

const newsBodyEl = document.createElement("p");
newsBodyEl.classList.add("newsBody");
newsCardEl.append(newsBodyEl);
