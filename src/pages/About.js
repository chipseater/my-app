import Logo from "../components/logo"
import Navigation from "../components/navigation"

const Home = () => {
    return(
        <div className="main">
            <Logo />
            <Navigation />
            <br></br>
            <h1>À propos</h1>
            <p>Bah Voilà c nous les africains ui revenons de loin, tous réunis pour sauver la patrie,
                 car nous voulons, porter haut et fier, le beau drapeau, de notre France entière,
                 et si quel qu'un venait à y toucher, nous serions là pour mourir à ses pieds !
                  Battez tambours, À nous amours, mourir au loin nous sommes les Zafricains !</p>
        </div>
    )
}

export default Home