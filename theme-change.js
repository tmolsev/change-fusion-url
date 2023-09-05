function change_URL(user_role) {
  switch (user_role) {
    case "Sales":
      window.location.replace("http://www.w3schools.com");
      break;
    default:
      console.log("do nothing");
      break;
  }
}
      change_URL(user_role)
