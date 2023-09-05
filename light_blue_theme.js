function change_URL() {
      
const fullURL = window.location.href;
console.log(fullURL);
      
if (fullURL.includes("fndThemeName=Light Blue")) {
  console.log("The string contains 'fndThemeName=Light Blue'");
} else {
  console.log("The string does not contain 'fndThemeName=Light Blue'");
      window.location.replace("https://fa-eqjw-dev10-saasfademo1.ds-fa.oraclepdemos.com/crmUI/faces/FuseWelcome?fndThemeName=Light%20Blue");
}

      
}
 change_URL()
