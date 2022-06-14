const container = document.getElementById("container");

function makeGrid(sides = 16)
{
let total_squares = sides ** 2;
for(let i = 0; i < total_squares;i++)
{
    const item = document.createElement('div');
    item.classList.add('inner_boxes');
    item.textContent = "`";
    container.appendChild(item);
}
}


makeGrid();

function userInteract()

{
function change_color(e)
{
    this.classList.add('color');

}
const boxes = Array.from(document.querySelectorAll('.inner_boxes'));
boxes.forEach(box => box.addEventListener('mouseover', change_color));

}


userInteract();



const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => button.addEventListener('click', () => {
    
    let user_input = prompt("Choose # of Squares per Side of SketchPad\
    (MAX: 100)");
    while(true)
    {
        if(user_input > 0 && user_input <= 100){
            break;
        }
        else
        {
            let x = prompt("AYO I SAID GIMME A VALID NUMBER OF SIDES");
            user_input = x;
        }
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }

      let string = "";

      for(let i = 0; i < user_input;i++)
      {
        string += "1fr ";
      }

      container.style.gridTemplateColumns = string;
      makeGrid(user_input);
      userInteract();
    }
)
)

