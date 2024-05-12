import Card from "../ui/card";
import Navbar from "../ui/navbar";
import { music } from "../lib/data";



export default function List (){
    return (
        <>
        <Navbar/>

    <div className="min-h-screen grid grid-cols-3 gap-2 m-2 md:ml-40">
        {
       music.map(music => <Card title= {music.title} singer = {music.singer} image = {music.image}/>)
        }
    </div>

    </>
    );
}