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
        if (transactions.category === "expense"){
            total += Number(transactions[i].amount)
        } else {
            total -= Number(transactions[i].amount)
        }
      };


//     const CashTotal = document.getElementById("BudgetVisual");

//   if (total > 100) {  
//     CashTotal.setAttribute("style", "color: green;");
//   } 
//   else if (total > 0) {
//     CashTotal.setAttribute("style", "color: yellow;");
//   } 
//   else {
//     CashTotal.setAttribute("style", "color: red;");
//   }

    return(
        <nav className="NavBar">

          <h1 className="LogoText">
            
            <Link to="/">Budget App</Link>

          </h1>

          {total}

          <button className="newButton">

            <Link to="/transactions/new">New Transaction</Link>

          </button>

        </nav>
    )
}