
        
        function calculate()
    {
        var x=parseInt(document.getElementById("no1").value);
        var y=parseInt(document.getElementById("no2").value);
        var op=document.getElementById("op").value;
        var result;
        if(op=='+')
        {
           result=x+y;
        }
        else if(op=='-')
        {
            result= x-y;
        }
        else if(op=='*')
        {
            result= x*y;
        }
        else if(op=='/')
        {
            result= x/y;
        }
        document.getElementById("result").value=result;
    }