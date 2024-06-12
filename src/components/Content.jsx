import Categories from './Categories'
import Video from './Video'
export default function Content() {
    const videos = [
        { image: 'https://picsum.photos/200/100', title: 'Titulo 1', channel: 'Chanel 1'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 2', channel: 'Chanel 2'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 3', channel: 'Chanel 3'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 4', channel: 'Chanel 4'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 5', channel: 'Chanel 5'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 6', channel: 'Chanel 6'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 7', channel: 'Chanel 7'},
        { image: 'https://picsum.photos/200/100', title: 'Titulo 8', channel: 'Chanel 8'},
    ]
    return (
        <section id="content">
            <Categories/>
            <section id='videos'>
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