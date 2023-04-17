import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar () {

    const [transactions, setTransactions] = useState([]);
    let total = 0; 

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
          setTransactions(res.data);
          console.log(res.data)
        }).catch((e) => {
          console.log(e)
        })
      }, []);

      for (let i = 0; i < transactions.length; i++){
        if (transactions[i].category.toLowerCase() === "income"){
            total += Number(transactions[i].amount)
        } else if (transactions[i].category.toLowerCase() === "expense") {
            total -= Number(transactions[i].amount)
        }
      };


    return(
        <nav className="NavBar">

          <h1 className="LogoText">
            
            <Link to="/">Budget App</Link>

          </h1>

          <h2 style={{color: total > 100 ? "green" : total > 0 ? "yellow" : "red"}}>{total}</h2>

          <button className="newButton">

            <Link to="/transactions/new">New Transaction</Link>

          </button>

        </nav>
    )
}