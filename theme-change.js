function change_URL() {
  const role = scriptElement.getAttribute('user_role');
  switch (role) {
    case "FND_APPLICATION_DEVELOPER_JOB":
      //window.location.replace("http://www.w3schools.com");
      console.log(" FOUND-REDIRECT")
      break;
    default:
      console.log("do nothing");
      break;
  }
}
      change_URL()
