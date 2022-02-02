import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main.js'
;
function App() {

  const[punkListData, setPunkListData] = useState([]);
  const[selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getmyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x888A0eEa2FCa50E25Aa0dfff6E481B7b16E56dFA&order_direction=asc"
        )
        console.log(openSeaData.data.assets);
        setPunkListData(openSeaData.data.assets);
    }

    return getmyNfts()

  }, []);

  return (
    <div className="app">
    <Header/>
    {punkListData.length >0 && (
      <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
      </>
    )}
    
    </div>
  );
}

export default App;
