function add(){
    var x=document.getElementById("item");
    var y=document.getElementById("date");
    // var z=date.current_date;&&y.value>=z
    if(x.value!=""&& y.value!="")
    {
        var table=document.getElementById("table");
        var row=table.insertRow();
        var datecell=row.insertCell(0);
        var itemcell=row.insertCell(1);
        var actioncell=row.insertCell(2);

        datecell.innerHTML=date.value;
        itemcell.innerHTML=item.value;
        actioncell.innerHTML='<input type="checkbox"/>';
    }
    else{
        alert("fill the required fields");
    }
}