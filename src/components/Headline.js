import updater from '../updater.js'

// const Headline = (default value)=>{
const Headline = (title='Judul Berita', img=299)=>{
    return `
        <section class='headline'>
            <h1>${title}</h1>
            <img src="https://picsum.photos/seed/${img}/900 " />
            ${Headline.state.content}
        </section>
        `
}

Headline.state = {
    content : `
        <!-- 
        // judul : <h1>Berita Utama</h1>, // di jadiin props di atas
        // img : 'https://picsum.photos/seed/150/600', // di jadiin props di atas
        -->
        <p>
            Selamat datang di Jvalley News, 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum modi rem laudantium, sunt in natus facere aliquam voluptatem. Labore sint delectus repellendus reprehenderit ea eum error quae quo autem.
        </p>

        <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum modi rem laudantium, sunt in natus facere aliquam voluptatem. Labore sint delectus repellendus reprehenderit ea eum error quae quo autem.
        </p>
    `

}


export default Headline

