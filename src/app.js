/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const getAllDomains = (arrays, index, currentCombination, domainNames) => {
    if (index === arrays.length) {
      domainNames.push(currentCombination.join(""));
      return;
    }

    for (let i = 0; i < arrays[index].length; i++) {
      currentCombination.push(arrays[index][i]);

      getAllDomains(arrays, index + 1, currentCombination, domainNames);

      currentCombination.pop();
    }
  };

  const pronoun = ["the", "our", "all"];
  const adj = ["great", "big", "amused"];
  const noun = ["jogger", "racoon", "apple"];
  const extensions = [
    ".com",
    ".net",
    ".io",
    ".us",
    ".org",
    ".dev",
    ".app",
    ".info",
    ".co",
    ".live",
    ".fan",
    ".art"
  ];
  const domainNames = [];

  const arrays = [pronoun, adj, noun, extensions];

  getAllDomains(arrays, 0, [], domainNames);

  const comNames = domainNames.filter(domain => {
    return domain.indexOf(".com") > -1;
  });

  const netNames = domainNames.filter(domain => {
    return domain.indexOf(".net") > -1;
  });

  const ioNames = domainNames.filter(domain => {
    return domain.indexOf(".io") > -1;
  });

  const usNames = domainNames.filter(domain => {
    return domain.indexOf(".us") > -1;
  });

  const orgNames = domainNames.filter(domain => {
    return domain.indexOf(".org") > -1;
  });

  const devNames = domainNames.filter(domain => {
    return domain.indexOf(".dev") > -1;
  });

  const appNames = domainNames.filter(domain => {
    return domain.indexOf(".app") > -1;
  });

  const infoNames = domainNames.filter(domain => {
    return domain.indexOf(".info") > -1;
  });

  const liveNames = domainNames.filter(domain => {
    return domain.indexOf(".live") > -1;
  });

  const fanNames = domainNames.filter(domain => {
    return domain.indexOf(".fan") > -1;
  });

  const artNames = domainNames.filter(domain => {
    return domain.indexOf(".art") > -1;
  });

  const parentArray = [
    comNames,
    netNames,
    ioNames,
    usNames,
    orgNames,
    devNames,
    appNames,
    infoNames,
    liveNames,
    fanNames,
    artNames
  ];

  let randomArray1 = [];
  let randomArray2 = [];

  do {
    randomArray1 = parentArray[Math.floor(Math.random() * parentArray.length)];
    randomArray2 = parentArray[Math.floor(Math.random() * parentArray.length)];
  } while (randomArray1 === randomArray2);

  const firsP = document.querySelector("#firstRandom");

  const secondP = document.querySelector("#secondRandom");

  firsP.innerHTML = randomArray1.join("\n");
  secondP.innerHTML = randomArray2.join("\n");

  const selectHeader = array => {
    if (array === comNames) {
      return ".com";
    } else if (array === netNames) {
      return ".net";
    } else if (array === ioNames) {
      return ".io";
    } else if (array === usNames) {
      return ".us";
    } else if (array === orgNames) {
      return ".org";
    } else if (array === devNames) {
      return ".dev";
    } else if (array === appNames) {
      return ".app";
    } else if (array === infoNames) {
      return ".info";
    } else if (array === liveNames) {
      return ".live";
    } else if (array === fanNames) {
      return ".fan";
    } else if (array === artNames) {
      return ".art";
    }
  };

  const firstHeader = document.querySelector("#firstHeader");
  firstHeader.innerHTML = selectHeader(randomArray1);

  const secondHeader = document.querySelector("#secondHeader");
  secondHeader.innerHTML = selectHeader(randomArray2);
};
