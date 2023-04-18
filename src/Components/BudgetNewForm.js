import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const uuid = require('uuid').v1

export default function BudgetNewForm() {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;


    const [transaction, setTransaction] = useState({
        amount: "",
        category: "",
        date: currentDate,
        from: "",
        id: uuid(),
        item_name: "",
        product: "",
      });

console.log(transaction)

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSelect = (event) => {
    setTransaction({...transaction, category: event.target.value});
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post(`${process.env.REACT_APP_API_URL}/transactions`, transaction)
    .then(() => {
      navigate("/transactions")
    })
    .catch((e) => {
      console.log(e)
    });
  };

        return(
            <div className="NewForm">
                <h1>Add A Transaction</h1>
                <form onSubmit={handleSubmit}>
                    Category:
               <select id="category-select" value={transaction.category} onChange={handleSelect}>
               <option value="">--Please choose an option--</option>
               <option value="Expense">Expense</option>
               <option value="Income">Income</option>
               </select>
             
                <label htmlFor="product">Product:
                <input
                  id="product"
                  type="text"
                  value={transaction.product}
                  placeholder="Product"
                  onChange={handleTextChange}
                />
                </label>
                <label htmlFor="amount">Amount:
                <input
                  id="amount"
                  type="text"
                  value={transaction.amount}
                  placeholder="Total Dollar Amount"
                  onChange={handleTextChange}
                />
                </label>
                
                <label htmlFor="from">From:
                <input
                  id="from"
                  value={transaction.from}
                  onChange={handleTextChange}
                  type="text"
                  placeholder="Where is this transaction from?"
                />
                </label>

                <label htmlFor="item_name">Item Name:
                <input
                  id="item_name"
                  value={transaction.item_name}
                  onChange={handleTextChange}
                  type="text"
                  placeholder="Name of the item?"
                />   
                </label>

                <input type="submit" />
              </form>
            </div>
          );
};