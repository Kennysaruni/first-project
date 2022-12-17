const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9875652ae1msh37837c1b985fbc1p1a8f8ajsn2f01cc8bca06',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
	.then(response => response.json())
	.then(response => console.log(response))
    
	.catch(err => console.error(err));
function renderMusic(music){
    const card = document.createElement('div')
    card.className = "music-card"
    const musicList = document.createElement('li')
    musicList.innerHTML = `
    <div id="songs">
    <p>${music.uri}</p>
    
    </div>
    `
    card.appendChild(musicList)
}    