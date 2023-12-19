function change_URL() {
  // Check if the script has already run this session
    
  if (sessionStorage.getItem("scriptHasRun_BR")) {
    console.log("The script has already run this session. Skipping...");
    //sessionStorage.removeItem("scriptHasRun_BR");
    return;
  }

  const fullURL = window.location.href;
  console.log("Location URL" + fullURL);

  if (fullURL.includes("fndThemeName=SGBrasil")) {
    console.log("The string contains 'fndThemeName=SGBrasil'");
  } else {
    // TM: Add check to avoid setting the theme if the user is in Set Preferences
    if (!fullURL.includes("itemNode_Tools_Preferences")) {
      console.log("The string does not contain 'fndThemeName=SGBrasil'");
      window.location.replace("https://fa-esdr-saasfademo1.ds-fa.oraclepdemos.com/hcmUI/faces/FuseWelcome?fndThemeName=SGBrasil");
    }
  }

  // Set the flag indicating the script has run
  sessionStorage.setItem("scriptHasRun_BR", "true");
}

change_URL();
