import { useState, useEffect } from "react";
import Transaction from "./Transaction";


export default function Transactions() {
    const [budgetList, setBudgetList ] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/transactions`)
        .then((res) => res.json())
        .then(data => {
          setBudgetList(data)
          console.log(data)
        })
      }, []);

    return(
        <div className="TransactionIndex">
            <section>
                {budgetList.map((budget, index) => {
                    return <Transaction key={index} budget={budget} index={index}/>;
                })}
            </section>
        </div>
    )
}