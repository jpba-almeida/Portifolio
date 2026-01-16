const fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// --- Fetch GitHub data ---
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            stargazers { totalCount }
            url
            id
            diskUsage
            primaryLanguage { name color }
          }
        }
      }
    }
  }
}
`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(options, res => {
    let githubData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn("Aviso: não foi possível buscar dados do GitHub.");
      return;
    }

    res.on("data", d => {
      githubData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", githubData, err => {
        if (err) return console.log(err);
        console.log("Arquivo salvo: public/profile.json");
      });
    });
  });

  req.on("error", error => {
    console.warn("Erro ao buscar GitHub:", error);
  });

  req.write(data);
  req.end();
}

// --- Fetch Medium data (seguro) ---
if (MEDIUM_USERNAME) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);

  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn("Aviso: não foi possível buscar dados do Medium.");
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, err => {
        if (err) return console.log(err);
        console.log("Arquivo salvo: public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.warn("Erro ao buscar Medium:", error);
  });

  req.end();
}
