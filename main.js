console.log ("hello")

const url='https://itunes.apple.com/search?term='
const proxyUrl= 'https://proxy-itunes-api.glitch.me/search?term='
const form =document.querySelector('#music-search-form')
const songList= document.querySelector('#song-list')

form.addEventListener('submit', function (event) {
    // console.log('running')
    event.preventDefault()
    // clearResults()
    searchRequest()
})


// function clearResults () {
//     let songs = document.querySelectorAll('#songs')
//         for (let song of songs) {
//             song.remove();
//         }
// }


function searchRequest () {
    let searchInput = document.querySelector('#search-box').value
    fetch(url + searchInput)
    .then(res => res.json())
    .then(data => {
        for (let song of data.results) {
            console.log(song.trackName) //.trackName  .artistName //
            renderMusicResults(song)
        }
    })   
}

function renderMusicResults (song) {
    let songData = document.createElement ('div')
    let indSong = document.createElement('li')
    
    let artwork = document.createElement('img')
    artwork.src=song.artworkUrl100
    indSong.appendChild(artwork)
    
    let title = document.createElement('p')
    title.innerText = song.trackName
    indSong.appendChild(title)
        
    let artistName= document.createElement('H4')
    artistName.innerText=song.artistName
    indSong.appendChild(artistName)
    songList.appendChild(indSong)

    let trackId= document.createElement('p')
    trackId.innerText=song.trackId
    // indSong.appendChild(trackId)

    let songAudio = document.createElement('div')
    songAudio.innerHTML = `<audio controls src="${song.previewUrl}"</audio>`
    // songAudio.src=song.previewUrl
    indSong.appendChild(songAudio)
}



// listMusic()