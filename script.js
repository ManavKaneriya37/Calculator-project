let  screen = document.querySelector('.screen');
let  btns = document.querySelectorAll('.button');
let  string = "";
screen.readOnly = true;
btns.forEach((btn) => {
      btn.addEventListener("click", (e) =>{
            if(e.target.innerHTML === "=")
            {
                  string = eval(string);
                  screen.value = string;
            }
            else if(e.target.innerHTML === "%")
            {
                  const percentval = parseInt(string);
                  const calcpercentval = (percentval/100);
                  screen.value = calcpercentval;
            }
            else if(e.target.innerHTML === "AC")
            {
                  string = "";
                  screen.value = string;
            }
            else if(e.target.innerHTML === "DEL")
            {
                  string = string.substring(0, string.length - 1);
                  screen.value = string;
            }
            else{
                  string += e.target.innerHTML;
                  screen.value = string;
            }
      });
});