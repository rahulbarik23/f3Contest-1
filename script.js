fetch("https://dummyjson.com/products").then((data)=>{

}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData='<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src ="${value.image}"/></td>
        </tr>';
    });
    document.getElementById("table_body").
    innerHTML= tableData;
}).catch((arr)=>{
    console.log(arr);
})