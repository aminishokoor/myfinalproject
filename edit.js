function myFunction() {
  const club1 = document.getElementById("txt1").value.split("\n");
  const club2 = document.getElementById("txt2").value.split("\n");

  let team1 = parseInt(document.getElementById("input1").value);
  let team2 = parseInt(document.getElementById("input2").value);
  document.getElementById("input1").value = team1;
  document.getElementById("input2").value = team2;
  if (!club1 || !club2 || !team1 || !team2) {
    alert("No inputs.")
  } else if (club1.length < 7 || club1.length > 11 || club2.length < 7 || club2.length > 11) {
    alert("Please insert not less than 7 or more than 11 players!")
  } else {
    const result = team1 + team2;
    if (result > 7) {
      alert("Not allowed more than 7 Goals!");
    } else {
      switch (team1) {
        case 0:
          document.getElementById("input3").value = "0";
          break;
        case 1:
          document.getElementById("input3").value = "1";
          break;
        case 2:
          document.getElementById("input3").value = "(2)," + "(1,1)";
          break;
        case 3:
          document.getElementById("input3").value = "(1 1 1)," + "(2,1)," + "(3)";
          break;
        case 4:
          document.getElementById("input3").value = "(1 1 1 1)," + "(2 1 1)," + "(3 1)," + "(2 2)," + "(4)";
          break;
        case 5:
          document.getElementById("input3").value = "(1 1 1 1 1)," + "(2 1 1 1)," + "(3 1 1)," + "(2 3)," + "(4 1)," + "(5)";
          break;
        case 6:
          document.getElementById("input3").value = "(1 1 1 1 1 1)," + "(2 1 1 1 1)," + "(3 1 1 1)," + "(3 3)," + "(4 1 1)," + "(5 1)," + "(4 2)," + "(6)";
          break;
        case 7:
          document.getElementById("input3").value = "(1 1 1 1 1 1 1)," + "(2 1 1 1 1 1)," + "(3 1 1 1 1)," + "(3 4)," + "(4 1 1 1)," + "(5 1 1)," + "(4 2 1)," + "(6 1)" + "(7)";
          break;
        default: 0;
          break;
      }
      switch (team2) {
        case 0:
          document.getElementById("input4").value = "0";
          break;
        case 1:
          document.getElementById("input4").value = "1";
          break;
        case 2:
          document.getElementById("input4").value = "(2)," + "(1,1)";
          break;
        case 3:
          document.getElementById("input4").value = "(1 1 1)," + "(2,1)," + "(3)";
          break;
        case 4:
          document.getElementById("input4").value = "(1 1 1 1)," + "(2 1 1)," + "(3 1)," + "(2 2)," + "(4)";
          break;
        case 5:
          document.getElementById("input4").value = "(1 1 1 1 1)," + "(2 1 1 1)," + "(3 1 1)," + "(2 3)," + "(4 1)," + "(5)";
          break;
        case 6:
          document.getElementById("input4").value = "(1 1 1 1 1 1)," + "(2 1 1 1 1)," + "(3 1 1 1)," + "(3 3)," + "(4 1 1)," + "(5 1)," + "(4 2)," + "(6)";
          break;
        case 7:
          document.getElementById("input4").value = "(1 1 1 1 1 1 1)," + "(2 1 1 1 1 1)," + "(3 1 1 1 1)," + "(3 4)," + "(4 1 1 1)," + "(5 1 1)," + "(4 2 1)," + "(6 1)" + "(7)";
          break;
        default: 0;
          break;
      }
      console.log(club1);
      console.log(club2);
    }
  }
  if(team1 < 0 || team2 < 0) {
    document.getElementById("result").value = "";
  }
  else if (team1 > team2) {
    document.getElementById("result").value = "1st Team is Winner";
  } else if (team1 < team2) {
    document.getElementById("result").value = "2nd Team is winner";
  }
  else if (team1 === team2) {
    document.getElementById("result").value = "Equal!";
  }
  else {
    document.getElementById("result").value = "";
  }
}