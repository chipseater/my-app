import Countries from "../components/Countries";
import Logo from "../components/logo";
import Navigation from "../components/navigation";


const Home = () => {
    return(
        <div className="home">
            <Logo />
            <Navigation/>
            <br></br>
            <h1>Quels jolis pays</h1>
            <Countries/>
        </div>
    )
}

export default Home;