async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data.userId)
    } catch(error) {
        console.log("Error:", error);
    }
}
fetchData()