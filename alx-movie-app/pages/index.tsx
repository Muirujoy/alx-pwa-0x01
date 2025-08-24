import Movies from "../components/movies";

const Home:React.FC=()=>{
  return(
    <div>
      <h1>🎬 Welcome to ALX Movie App</h1>
      <p>This is the PWA-enabled Next.js app!</p>
      <Movies/>
    </div>
  )
}
export default Home;
