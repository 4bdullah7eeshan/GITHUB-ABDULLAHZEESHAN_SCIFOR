function f1() {
    fetch("https://dummyjson.com/posts/1")
        .then(res => res.json()) 
        .then(data => {
            console.log(data);
        });
}
