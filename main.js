// STUDENT GRADES

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let grades = [];
let max = 100; // grade values should be b/t 0 and max
for (let i = 0; i < 50; i++) {
  let randGrade = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  grades[i] = randGrade;
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / grades.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < grades.length; i++) {
    // Calculate scaled bar height based on cnv.height and canvasMax
    let barHeight = grades[i] * (cnv.height / max);

    ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
    ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// MAIN MENU EVENTS

// DOM Elements
let outputEl = document.getElementById("output");

// Main Menu & Go Button
document.getElementById("go").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu").value;

  // Take action based on menu selection
  if (selection == "first40") {
    // Set the grade of the first student to 40.
    grades[0] = 40;

    outputEl.innerHTML = "First grade to 40";
  } else if (selection == "last50") {
    // Set the grade of the last student to 50.
    grades[grades.length - 1] = 50;

    outputEl.innerHTML = "Last grade to 50";
  } else if (selection == "random100") {
    // Set the grade of a random student to 100.
    let randStudent = Math.floor(Math.random() * (grades.length - 0) + 0);
    grades[randStudent] = 100;

    outputEl.innerHTML = "Random grade to 100";
  } else if (selection == "addRandom") {
    // Add a random grade between 0 and 100 to the end of the array.
    let randGrade = Math.floor(Math.random() * (101 - 0) + 0);
    grades[grades.length] = randGrade;

    outputEl.innerHTML = "Add random grade";
  } else if (selection == "removeLast") {
    // Remove the last grade.
    grades.pop();

    outputEl.innerHTML = "Remove the last grade";
  } else if (selection == "count50") {
    // Count how many grades are below 50.  Output the result.
    let countBelow50 = 0;
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] < 50) {
        countBelow50++;
      }
    }

    outputEl.innerHTML = `${countBelow50} grades are below 50`;
  } else if (selection == "change50") {
    // Change all grades that are below 50 to be equal to 50.
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] < 50) {
        grades[i] = 50;
      }
    }

    outputEl.innerHTML = "Change low grades to 50";
  } else if (selection == "increase10") {
    // Increase each grade by 10%.
    for (let i = 0; i < grades.length; i++) {
      let tenPercInc = grades[i] * 0.1;
      grades[i] += tenPercInc;
    }

    outputEl.innerHTML = "Increase all grades by 10%";
  } else if (selection == "decrease10") {
    // Decrease each grade by 10%.
    for (let i = 0; i < grades.length; i++) {
      let tenPercDec = grades[i] * 0.1;
      grades[i] -= tenPercDec;
    }

    outputEl.innerHTML = "Decrease all grades by 10%";
  } else if (selection == "remove50") {
    // Remove all grades that are below 50.
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] < 50) {
        grades.splice(i, 1);
        i--;
      }
    }

    outputEl.innerHTML = "Remove grades below 50";
  }
}
