function f1() {
    const apiKey = 'ISqXk4wJHYuq1KZFDkvtcPOIUJfwzRmA'; 
    const searchQuery = 'cats';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchQuery}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const gifUrl = data.data.images.original.url;
            document.getElementById('gifContainer').innerHTML = `<img src="${gifUrl}" alt="Random Gif">`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
