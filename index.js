let expression="";
let answer='';
function add(x)
    {
     expression=expression+x;
      document.getElementById('input').value=expression;
    }
    function solve()
    {
      
     let answer = eval(expression);
     document.getElementById('input').value = answer;
      answer=''
     expression=''
    }
    function cleear()
    {
        expression=" ";
      document.getElementById('input').value=" ";
    }