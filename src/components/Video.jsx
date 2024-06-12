// LOS COMPONENTES DE REACT SOLO RECIBEN 1 UNICO Y PRIMER PRARAMETRO

// AQUI TENEMOS 3 MANERAS DE  HACERLO 

// export default function Video(props) {   **mEDINTE
//     return  (
//         <article className="video-card">
//             <img src={props.img} alt="" />
//             <footer>
//                 <img src="" alt="" />
//                 <p>{props.titulo}</p>
//                 <p>{props.canal}</p>
//             </footer>
//         </article>
//     )
// }

// export default function Video(props) {
//     const { img, titulo, canal}
//     return  (
//         <article className="video-card">
//             <img src={img} alt="" />
//             <footer>
//                 <img src="" alt="" />
//                 <p>{titulo}</p>
//                 <p>{canal}</p>
//             </footer>
//         </article>
//     )
// }

export default function Video({ imagen, titulo, canal }) {
    return  (
        <article className="video-card">
            <img src={imagen} alt="" />
            <footer>
                <img src={`https://api.dicebear.com/8.x/identicon/svg?seed=${canal}`} alt="" />
                <span className="video-card-title" >{titulo}</span>
                <span className="video-card-channel" >{canal}</span>
            </footer>
        </article>
    )
}