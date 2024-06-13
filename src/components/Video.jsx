import clsx from "clsx"
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
    
    // RENDERIZADO CONDICIONAL

    // if(!canal){
    //     return(
    //         <article>
    //             <p>No hay Canal</p>
    //         </article>
    //     )
    // }
/******************************************** SI QUEREMOS DESTACAR ALGUN ELEMENTO *************** */

    // const articleClassnames = "video-card" + (canal === 'Marques Browlee' ? ' special' : '')  // el espacio de especial es importante
// <article className={articleClassnames}>    -- RENDERIZARIAMOS ESTE COMPONENTE

    // let articleClassnames = ["video-card"]

    // if(canal === 'Marques Browlee'){
    //     articleClassnames.push('special')
    // }
    // <article className={articleClassnames.join(" ")}>    -- RENDERIZARIAMOS ESTE COMPONENTE

    return  (
        // <article className={articleClassnames}>
        // <article className="video-card">  
        // PARA EL CLSX primero recibe la clase que no cambia..
        // 2. parametro condicional
        <article className={clsx(("flex flex-col gap-2"), { 'border-red-600 border-solid border-2' : canal === 'Marques Browlee'})}>
            <img src={imagen} className="w-full rounded-xl object-cover aspect-video" alt="" />
            <footer className="grid gap-2 grid-cols-[2rem_1fr]">
                {/* { // SI hay canal ENTONCES(&&) renderiza la imagen
                    canal && (
                        <img src={`https://api.dicebear.com/8.x/identicon/svg?seed=${canal}`} alt="" />
                    )
                }
                { // SI NO hay canal ENTONCES .. renderiza el span
                    !canal && (
                        <span>🤷‍♀️</span>
                    )
                } */}

                { // funciona de la misma manera con ternarios
                    canal ? (
                        <img src={`https://api.dicebear.com/8.x/identicon/svg?seed=${canal}`} 
                             className="col-start-1 col-end-2 w-8 h-8 rounded-[50%]" 
                             alt="" />
                    ) : (
                        <span>🤷‍♀️</span>
                    )
                }
                <span className="col-start-2 col-end-3" >{titulo}</span>
                <span className="col-start-2 col-end-3" >{ canal || "UNKNOW" }</span>
            </footer>
        </article>
    )
}