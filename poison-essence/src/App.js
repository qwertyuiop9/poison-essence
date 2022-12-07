import { useState, useEffect } from 'react';
import MButton from '@mui/material/Button';
import './App.css';
import Test_image from './components/images/test_image.jpg';
import AssetCard from './components/asset-card';
import { Box } from '@mui/system';

function App() {

  // React
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
  });


  function updateConnectedWallet() {

    if (currentAccount === "") {
      console.log("Not logged in");
      return (<MButton variant="contained" style={{
        borderRadius: 10,
        backgroundColor: "#a1c126",
        padding: "10px 15px",
        fontSize: "13px"
      }} size="large" onClick={connectWallet}>Connect wallet</MButton>);
    } else {
      return (
        <div class="d-inline-flex" style={{
          padding: "10px 15px",
          fontSize: "13px",
          color: "#bad640"
        }}>
          <h5 class="px-2">{"Connected wallet: " + currentAccount.substring(0, 5) + "..." + currentAccount.substring(currentAccount.length, currentAccount.length - 5)}</h5>
        </div>
      );
    }
  }

  const connectWallet = async () => {

    // Check Metamask presence
    var { ethereum } = window;
    if (!ethereum) {
      console.log("Metamask not installed");
    } else {
      console.log("Wallet found, ready to start");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); // fundamental to add this line for correctness
      if (accounts.length !== 0) {
        setCurrentAccount(accounts[0]);
        console.log("Account 0: " + accounts[0]);
      } else {
        console.log("0 account connected to Metamask extension");
      }
    } catch {
      console.log("Error during Metamask connection");
    }

  }



  return (
    <div className="App" class="pb-5 bg" >
      <div class="p-3 background_violet">
        <nav class="navbar navbar-expand-lg navbar-light" color="#551b8c">
          <div class="container-fluid">
            <div class="px-5">
              <h3 class="text-light">Poison Essence</h3>
            </div>
            <div class="px-5">
              {updateConnectedWallet()}
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div class="mt-5 container">
          <div class="row align-items-center" >
            <div class="col-6">
              <div class="card">
                <div class="card-body">
                  test
                </div>
              </div>
            </div>
            <div class="col-6">
              <AssetCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
