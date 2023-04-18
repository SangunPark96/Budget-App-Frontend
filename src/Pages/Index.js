import Transactions from "../Components/Transactions"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Index(){
let total = 0
const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
          setTransactions(res.data)
        }).catch((e) => {
          console.log(e)
        })
      }, []);

      for (let i = 0; i < transactions.length; i++){
        if (transactions[i].type.toLowerCase() === "deposit"){
            total += Number(transactions[i].amount)
        } else if (transactions[i].type.toLowerCase() === "withdrawal") {
            total -= Number(transactions[i].amount)
        }
      };


    return(
        <div className="Index">
          <h2>Transaction Index</h2>
          <h2 style={{color: total > 100 ? "green" : total > 0 ? "yellow" : "red"}}>Balance: ${total}</h2>
            <Transactions/>
        </div>
    )
};