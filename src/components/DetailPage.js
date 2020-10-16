import Hero from './Hero.js'
import Headline from './Headline.js'

const DetailPage = ()=>{
    return `
        
        <section class=;detailPage'>
        
            <!-- reuse component hero dan headline -->
            ${Hero()}
            ${Headline('Ekonomi', 49)}
        
        </section>
    `
}

export default DetailPage
