
  const buttonContainer = document.createElement("div");
  buttonContainer.id = "button";
  document.body.appendChild(buttonContainer);

  const options = ["Rock", "Paper", "Scissors"];
  options.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    buttonContainer.appendChild(btn);
  });

  // Create user and computer image elements
  const imguser = document.createElement("img");
  imguser.id = "imguser";
  document.body.appendChild(imguser);

  const imgcomp = document.createElement("img");
  imgcomp.id = "imgcomp";
  document.body.appendChild(imgcomp);

  const input = document.getElementById("button");

  input.addEventListener("click", (e) => {
    const userChoice = e.target.textContent;
    if (!options.includes(userChoice)) return; 


    const oldResult = document.getElementById("result");
    if (oldResult) {
      oldResult.remove();
    }

    const assets = {
      Rock: "assets/rock.png",
      Paper: "assets/paper.png",
      Scissors: "assets/scissors.png",
    };

    imguser.src = assets[userChoice];

    const compChoice = options[Math.floor(Math.random() * 3)];
    imgcomp.src = assets[compChoice];

    const result = document.createElement("p");
    result.id = "result";

    if (userChoice === compChoice) {
      result.textContent = "It's a draw!";
    } else if (
      (userChoice === "Rock" && compChoice === "Scissors") ||
      (userChoice === "Paper" && compChoice === "Rock") ||
      (userChoice === "Scissors" && compChoice === "Paper")
    ) {
      result.textContent = "You won!";
    } else {
      result.textContent = "You lost!";
    }

    document.body.appendChild(result);
  });