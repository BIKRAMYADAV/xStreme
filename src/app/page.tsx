
export default function Home() {

  return (
<main className="flex flex-col min-h-screen items-center justify-between p-40">
<div className=" max-w-full overflow-hidden
        rounded-2xl shadow-lg  w-screen flex
        ">
          <div>
           
          <img src= "/fight-club.jpeg" alt="image of the song to be played..."
          className=" transition-transform hover:scale-110
          duration-200  
          "
          />
          </div>


        </div>
        <audio src="" className="bg-white hover:bg-black text-white font-bold py-2 px-4 rounded w-full" controls></audio>
    
</main>
  );
}
