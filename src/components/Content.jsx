import Categories from './Categories'
import Video from './Video'
export default function Content() {
    const videos = [
        { image: 'https://picsum.photos/200/100', title: 'Titulo 1', channel: 'Chanel 1'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 2', channel: 'Marques Browlee'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 3', channel: 'Chanel 3'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 4', channel: 'Chanel 4'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 5', channel: 'Chanel 5'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 6', channel: ''},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 7', channel: 'Chanel 7'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 8', channel: 'Chanel 8'},
    ]
    return (
        <section className="col-start-2 col-end-3 row-start-2 row-end-3">
            <Categories/>
            <section className="grid grid-cols-4 gap-4 pt-4">
                {
                    videos.map((video) => {
                        return ( 
                            <Video 
                                key={`video-${video.title}`} 
                                imagen={video.image}
                                titulo={video.title}
                                canal={video.channel}
                            />
                        )
                    })
                }
            </section>
        </section>
    )
}