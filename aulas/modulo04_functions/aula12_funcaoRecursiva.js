let num = 0
function recursiva() {
  if(num < 20) {
    console.log(num);
      num++;
      recursiva();
    }
}

recursiva();