
let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;

        function filterData(category) {
            const maxLength = 5;

            if(category == null || "all"){
                attractions.sort(function (a,b){
                    return a.visitors > b.visitors;
                });
                let data = attractions.slice(0,5);
                renderBarChart(data);
            } else {
                let filteredAttraction = attractions.filter(attractions => attractions.Category == category)
                filteredAttraction.sort((a,b) => {
                    return a.visitors > b.visitors;
                });
                let data = filteredAttraction.slice(0,maxLength);
                renderBarChart(data);
            } 
        }

        let selector = document.querySelector("#attraction-category");
        filterData(attractions);
        selector.addEventListener('change', function(event){
            attractions.filter(filterData(event.target.value));
            console.log(event.target.value);
        })
    });


