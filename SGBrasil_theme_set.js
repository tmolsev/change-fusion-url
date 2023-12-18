function change_URL() {
  // Check if the script has already run this session
    
  //if (sessionStorage.getItem("scriptHasRun")) {
  //  console.log("The script has already run this session. Skipping...");
  //  sessionStorage.removeItem("scriptHasRun");
  //  return;
  //}

  const fullURL = window.location.href;
  console.log(fullURL);

  if (fullURL.includes("fndThemeName=SGBrasil")) {
    console.log("The string contains 'fndThemeName=SGBrasil'");
  } else {
    console.log("The string does not contain 'fndThemeName=SGBrasil'");
    window.location.replace("https://fa-esdr-saasfademo1.ds-fa.oraclepdemos.com/hcmUI/faces/FuseWelcome?fndThemeName=SGBrasil");
  }

  // Set the flag indicating the script has run
  sessionStorage.setItem("scriptHasRun", "true");
}

change_URL();
