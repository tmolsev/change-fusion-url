function change_URL() {
  // Check if the script has already run this session
    
  //if (sessionStorage.getItem("scriptHasRun")) {
  //  console.log("The script has already run this session. Skipping...");
  //  sessionStorage.removeItem("scriptHasRun");
  //  return;
  //}

  const fullURL = window.location.href;
  console.log(fullURL);

  if (fullURL.includes("fndThemeName=PointP")) {
    console.log("The string contains 'fndThemeName=PointP'");
  } else {
    // TM: Add check to avoid setting the theme if the user is in Set Preferences
    if (!fullURL.includes("itemNode_Tools_Preferences")) {
      console.log("The string does not contain 'fndThemeName=PointP'");
      window.location.replace("https://fa-esdr-saasfademo1.ds-fa.oraclepdemos.com/hcmUI/faces/FuseWelcome?fndThemeName=PointP");
    }
  }

  // Set the flag indicating the script has run
  sessionStorage.setItem("scriptHasRun", "true");
}

change_URL();
