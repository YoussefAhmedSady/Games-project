import { ui } from "./ui.js";
import { detaile } from "./detail.js";
export class games{
    constructor(){
        this.getGames('mmorpg')
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click',(e)=>{
                document.querySelector('.active').classList.remove('active')
                e.target.classList.add('active')    
                this.getGames(link.innerHTML.toLocaleLowerCase())
                document.querySelector('.spinner').classList.remove('d-none')
            })
        })
        this.ui=new ui()
        this.detaile=new detaile()
    }
    async getGames(a) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'dfb185d476msh17efdf06212ebdbp1154bfjsnf3029fc0f8c9',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${a}`,options)
        const response=await api.json();
        document.querySelector('.spinner').classList.add('d-none')
        this.ui.displayGames(response)
        this.getId()
        };
        getId(){
            document.querySelectorAll('.card').forEach((item)=>{
                item.addEventListener('click', (e)=> {
                const id=item.dataset.id
                this.detaile.getDetailes(id)
                })
            })
        }
}
