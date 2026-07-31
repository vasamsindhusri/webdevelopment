const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const filter = search.value.toLowerCase();

    const rows = document.querySelectorAll("#employeeTable tbody tr");

    rows.forEach(row => {

        const text = row.innerText.toLowerCase();

        if(text.includes(filter)){
            row.style.display="";
        }else{
            row.style.display="none";
        }

    });

});