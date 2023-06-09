import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar () {

    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate()
    let total = 0; 

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
          setTransactions(res.data);
          console.log(res.data)
        }).catch(() => {
          navigate("/not-found")
        })
      }, [navigate]);

      for (let i = 0; i < transactions.length; i++){
        if (transactions[i].type.toLowerCase() === "deposit"){
            total += Number(transactions[i].amount)
        } else if (transactions[i].type.toLowerCase() === "withdrawal") {
            total -= Number(transactions[i].amount)
        }
      };


    return(
        <nav className="NavBar">

          <h1 className="LogoText">
            
          <Link to="/">Home</Link>

          </h1>

          <h2>

          <Link to="/transactions">Transaction List</Link>

          </h2>

          <h2 style={{color: total > 100 ? "green" : total > 0 ? "yellow" : "red"}}>Balance: ${total}</h2>

          <button className="newButton">

            <Link to="/transactions/new">New Transaction</Link>

          </button>

        </nav>
    )
}