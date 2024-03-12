document.getElementById("erase").setAttribute("disabled", true);
document.getElementById("sol").setAttribute("disabled", true);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = document.getElementById("maze");
ctx.drawImage(img, 0, 0);

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");



path = [
  [234, 2], [234, 10], [202, 10], [202, 26], [186, 26], [186, 10], [138, 10], [138, 26], [154, 26], [154, 74], [122, 74],
  [122, 106], [106, 106], [106, 122], [138, 122], [138, 138], [154, 138], [154, 122], [186, 122], [186, 90],
  [202, 90], [202, 138], [186, 138], [186, 154], [202, 154], [202, 170], [218, 170], [218, 186], [202, 186], [202, 234],
  [266, 234], [266, 218], [298, 218], [298, 202], [378, 202], [378, 154], [394, 154], [394, 218], [378, 218], [378, 250],
  [362, 250], [362, 266], [330, 266], [330, 330], [346, 330], [346, 298], [362, 298], [362, 330], [378, 330], [378, 314],
  [394, 314], [394, 330], [410, 330], [410, 298], [442, 298], [442, 314], [426, 314], [426, 346], [394, 346], [394, 362],
  [378, 362], [378, 378], [410, 378], [410, 394], [394, 394], [394, 410], [426, 410], [426, 426], [474, 426], [474, 474],
  [458, 474], [458, 442], [410, 442], [410, 458], [394, 458], [394, 474], [362, 474], [362, 458], [346, 458], [346, 426],
  [314, 426], [314, 410], [282, 410], [282, 394], [330, 394], [330, 362], [346, 362], [346, 346], [282, 346], [282, 330],
  [250, 330], [250, 346], [266, 346], [266, 426], [282, 426], [282, 458], [266, 458], [266, 474], [250, 474], [250, 482]
]
pathback = [
  [234, 2], [234, 10], [202, 10], [202, 26], [186, 26], [186, 10], [138, 10], [138, 26], [154, 26], [154, 74], [122, 74],
  [122, 106], [106, 106], [106, 122], [138, 122], [138, 138], [154, 138], [154, 122], [186, 122], [186, 90],
  [202, 90], [202, 138], [186, 138], [186, 154], [202, 154], [202, 170], [218, 170], [218, 186], [202, 186], [202, 234],
  [266, 234], [266, 218], [298, 218], [298, 202], [378, 202], [378, 154], [394, 154], [394, 218], [378, 218], [378, 250],
  [362, 250], [362, 266], [330, 266], [330, 330], [346, 330], [346, 298], [362, 298], [362, 330], [378, 330], [378, 314],
  [394, 314], [394, 330], [410, 330], [410, 298], [442, 298], [442, 314], [426, 314], [426, 346], [394, 346], [394, 362],
  [378, 362], [378, 378], [410, 378], [410, 394], [394, 394], [394, 410], [426, 410], [426, 426], [474, 426], [474, 474],
  [458, 474], [458, 442], [410, 442], [410, 458], [394, 458], [394, 474], [362, 474], [362, 458], [346, 458], [346, 426],
  [314, 426], [314, 410], [282, 410], [282, 394], [330, 394], [330, 362], [346, 362], [346, 346], [282, 346], [282, 330],
  [250, 330], [250, 346], [266, 346], [266, 426], [282, 426], [282, 458], [266, 458], [266, 474], [250, 474], [250, 482]

]
pathback.reverse();

var color = "#3d3739";

function redClick() {
  color = "#ff0000";
  document.getElementById("sol").removeAttribute("disabled");
  document.getElementById("selected").style.backgroundColor="red";
  document.getElementById("red").style.border="ridge 2px white";
  document.getElementById("orange").style.border="ridge 2px black";
  
}
function orangeClick() {
  color = "#ffa500";
  document.getElementById("sol").removeAttribute("disabled");
  document.getElementById("selected").style.backgroundColor="orange";
  document.getElementById("red").style.border="ridge 2px black";
  document.getElementById("orange").style.border="ridge 2px white";
}
function greenClick() {
  color = "#008000";
  document.getElementById("sol").removeAttribute("disabled");
  document.getElementById("selected").style.backgroundColor="green";
}
function blueClick() {
  color = "#0000ff";
  document.getElementById("sol").removeAttribute("disabled");
  document.getElementById("selected").style.backgroundColor="blue";
}
function purpleClick() {
  color = "#800080";
  document.getElementById("sol").removeAttribute("disabled");
  document.getElementById("selected").style.backgroundColor="purple";
}


function drawSolution() {
  document.getElementById("sol").setAttribute("disabled", true);
  document.getElementById("erase").setAttribute("disabled", true);

  const drawLinesWithDelay = (ctx, path, delay, style) => {

    var pencil = new Image();
    pencil.src = "slike/pencil.png";
    



    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;

    const drawLineSegment = (i) => {
      const point = path[i];
      const x = point[0];
      const y = point[1];

      if (i === 0) {
        ctx.moveTo(x, y);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        //ctx.drawImage(img, 0, 0);
        ctx2.drawImage(pencil, x, y);

      } else {
        ctx.lineTo(x, y);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        //ctx.drawImage(img, 0, 0);
        ctx2.drawImage(pencil, x, y);

      }

      ctx.stroke();

      if (i < path.length - 1) {
        setTimeout(() => {
          drawLineSegment(i + 1);
        }, delay);
      } else {
        ctx.closePath();
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        document.getElementById("erase").removeAttribute("disabled");


      }

    };

    drawLineSegment(0);

  };
  const delayBetweenLines = 30;

  drawLinesWithDelay(ctx, path, delayBetweenLines);

}

function eraseSolution() {
  document.getElementById("sol").setAttribute("disabled", true);
  document.getElementById("erase").setAttribute("disabled", true);

  const drawLinesWithDelay = (ctx, pathback, delay, style) => {

    var erase = new Image();
    erase.src = "slike/erase.png";



    ctx.beginPath();
    ctx.strokeStyle = "rgba(211,205,207)";
    ctx.lineWidth = 4;

    const drawLineSegment = (i) => {
      const point = pathback[i];
      const x = point[0];
      const y = point[1];

      if (i === 0) {
        ctx.moveTo(x, y);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        //ctx.drawImage(img, 0, 0);
        ctx2.drawImage(erase, x, y);

      } else {
        ctx.lineTo(x, y);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        //ctx.drawImage(img, 0, 0);
        ctx2.drawImage(erase, x, y);

      }

      ctx.stroke();

      if (i < pathback.length - 1) {
        setTimeout(() => {
          drawLineSegment(i + 1);
        }, delay);
      } else {
        ctx.closePath();
        document.getElementById("sol").removeAttribute("disabled");
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);


      }

    };

    drawLineSegment(0);

  };
  const delayBetweenLines = 30;

  drawLinesWithDelay(ctx, pathback, delayBetweenLines);

}
