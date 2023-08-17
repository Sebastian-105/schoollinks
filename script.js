function schoollinks(link) {
  window.open(link);
  console.log("opened " + link + "!");
}

function lps() {
  const school = prompt(
    "What school do you want?\nOptions:\n(Case sensitive)\nClarke\nDiamond\nLHS\nBridge\nBowman\nHarrington\nHastings\nEstabrook\nFiske",
    "e.g: clarke"
  );
  if (school == "LHS") {
    window.open("https://www.lexingtonma.org/lhs/");
  } else if (school == "Clarke") {
    window.open("https://www.lexingtonma.org/clarke-middle/");
  } else if (school == "Diamond") {
    window.open("https://www.lexingtonma.org/diamond-middle/");
  } else if (school == "Bowman") {
    window.open("https://www.lexingtonma.org/bowman-elementary/");
  } else if (school == "Bridge") {
    window.open("https://www.lexingtonma.org/bridge-elementary/");
  } else if (school == "harrington") {
    window.open("https://www.lexingtonma.org/harrington-elementary/");
  } else if (school == "Estabrook") {
    window.open("https://www.lexingtonma.org/estabrook-elementary/");
  } else if (school == "Hastings") {
    window.open("https://www.lexingtonma.org/hastings-elementary/");
  } else if (school == "Fiske") {
    window.open("https://www.lexingtonma.org/hastings-elementary/");
  } else {
    alert(
      "pls enter a valid school name, remember the first letter is capitalized"
    );
    lps();
  }
}
function sixthgrade() {
  const sixth = prompt(
    "What Team do you want?\nOptions:\n(Case sensitive)\nAtlantis\nQuest\nVoyager\nColumbia",
    "e.g: Quest"
  );
  if (sixth == "Quest") {
    window.open("https://sites.google.com/lexingtonma.org/quest/home");
  } else if (sixth == "Voyager") {
    window.open("https://sites.google.com/lexingtonma.org/teamvoyager/home");
  } else if (sixth == "Atlantis") {
    window.open("https://sites.google.com/lexingtonma.org/atlantis/home");
  } else if (sixth == "Columbia") {
    window.open("https://sites.google.com/lexingtonma.org/team-columbia/home");
  } else if (sixth = false) {
    
  } else {
    alert(
      "pls enter a valid team name, remember the first letter is capitalized"
    );
    sixthgrade();
  }
}
function seventhgrade() {
  const sixth = prompt(
    "What Team do you want?\nOptions:\n(Case sensitive)\nExplorer\nAdventurer\nEnterprise\nEndeavor",
    "e.g: Explorer"
  );
  if (sixth == "Adventurer") {
    window.open(
      "https://sites.google.com/lexingtonma.org/adventurer-team/home"
    );
  } else if (sixth == "Explorer") {
    window.open(
      "https://sites.google.com/lexingtonma.org/explorer-team/explorer-homepage"
    );
  } else if (sixth == "Enterprise") {
    window.open(
      "https://sites.google.com/lexingtonma.org/enterpriseteam/announcements"
    );
  } else if (sixth == "Endeavor") {
    window.open(
      "https://sites.google.com/lexingtonma.org/endeavorteam/endeavor-home"
    );
  } else if (sixth = false) {

  } else {
    alert(
      "pls enter a valid team name, remember the first letter is capitalized"
    );
    sixthgrade();
  }
}
function eightgrade() {
  const sixth = prompt(
    "What Team do you want?\nOptions:\n(Case sensitive)\nArtemis\nApollo\nCuriosity\nDiscovery",
    "e.g: Explorer"
  );
  if (sixth == "Artemis") {
    window.open(
      "https://sites.google.com/lexingtonma.org/challenge-team/home"
    );
  } else if (sixth == "Curiosity") {
    window.open(
      "https://sites.google.com/lexingtonma.org/curiosity-team/home"
    );
  } else if (sixth == "Discovery") {
    window.open(
      "https://sites.google.com/lexingtonma.org/discovery/home"
    );
  } else if (sixth == "Apollo") {
    window.open(
      "https://sites.google.com/lexingtonma.org/apollo/home"
    );
  } else if (sixth = false) {

  } else {
    alert(
      "pls enter a valid team name, remember the first letter is capitalized"
    );
    sixthgrade();
  }
}
