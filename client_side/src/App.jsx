import './App.css'
import { useState, useEffect} from "react"
import { Route, Switch, useHistory} from "react-router-dom"
import HomePage from "/src/components/HomePage"
import NavBar from "/src/components/NavBar"
import BuyerProfile from "/src/components/BuyerProfile"
import Artworks from "/src/components/Artworks"
import ArtworkDetails from './components/ArtworkDetails'


function App() {

  const [allArtwork, setAllArtwork]= useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [currentBuyer, setCurrentBuyer] = useState('');
  const [allBuyers, setAllBuyers] = useState([]);

  // Fetching all Artwork
  useEffect(() => {
    fetch("http://localhost:9292/artworks")
    .then((res) => res.json())
    .then((artwork) => setAllArtwork(artwork));
  }, [])

  // console.log(allArtwork)
  let history = useHistory()


  function handleLoginClick(){
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
    history.push('/Artworks')
  }

// GETing buyer profiles
  useEffect(() => {
    fetch("http://localhost:9292/buyers")
    .then((res) => res.json())
    .then(setAllBuyers);
  }, []);

  // finding current buyer
  function handleChangeBuyers(e){
    // let fullName = `${buyer.first_name} + ${buyer.last_name}`
    currentBuyer = allBuyers.find((buyer) => buyer.first_name === e.target.value);
    setCurrentBuyer(currentBuyer);
  }

  // console.log(currentBuyer)

    // function filteredArt(selectedArt){
    //     const clickedArt = artwork.filter((art) => art.id === selectedArt.id);
    //     setArtwork(clickedArt)
    // }

  return (
    <div>
        <NavBar
          isLoggedIn={isLoggedIn}
          currentBuyer={currentBuyer}
        />
        <Switch>
            <Route exact path = "/">
              <HomePage
                onLoginClick={handleLoginClick}
                currentBuyer={currentBuyer}
                setCurrentBuyer={setCurrentBuyer}
                onChangeBuyers={handleChangeBuyers}
                setAllBuyers={setAllBuyers}
                allBuyers={allBuyers}
              />
            </Route>
            <Route exact path = "/Artworks" >
              <Artworks
                allArtwork={allArtwork}
              />
            </Route>
            <Route exact path = "/myProfile">
              <BuyerProfile
                currentBuyer={currentBuyer}
                setCurrentBuyer={setCurrentBuyer}
              />
            </Route>
            <Route path = "/artworks/:id">
              <ArtworkDetails />
            </Route>
        </Switch>
    </div>
  )
}

export default App
