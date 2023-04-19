import { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
const uuid = require('uuid').v1

export default function BudgetNewForm() {

    let { index } = useParams();

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
        type: ""
      });

console.log(transaction)

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCategorySelect = (event) => {
    setTransaction({...transaction, category: event.target.value});
  };

  const handleTypeSelect = (event) => {
    setTransaction({...transaction, type: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post(`${process.env.REACT_APP_API_URL}/transactions`, transaction)
    .then(() => {
      navigate(`/transactions/${index}`)
    })
    .catch((e) => {
      console.log(e)
    });
  };

        return(

            <div className="NewForm">
                <h1>Add A Transaction</h1>
                <form onSubmit={handleSubmit}>

                    Type:

               <select id="type-select" value={transaction.type} onChange={handleTypeSelect}>
               <option value="">--Please choose an option--</option>
               <option value="Withdrawal">Withdrawal</option>
               <option value="Deposit">Deposit</option>
               </select>
               <br/>
               <br/>
                <label htmlFor="product">Product:
                <input
                  id="product"
                  type="text"
                  value={transaction.product}
                  placeholder="Product"
                  onChange={handleTextChange}
                />
                </label>
                <br/>
                <label htmlFor="amount">Amount:
                <input
                  id="amount"
                  type="number"
                  value={transaction.amount}
                  placeholder="Total Dollar Amount"
                  onChange={handleTextChange}
                />
                </label>
                <br/>               
                Category:

                <select id="category-select" value={transaction.category} onChange={handleCategorySelect}>
                <option value="">--Please choose an option--</option>
                <option value="Important">Important</option>
                <option value="Dumb">Dumb</option>
                <option value="Business">Business</option>
                </select>
<br/>
<br/>
                <label htmlFor="from">From:
                <input
                  id="from"
                  value={transaction.from}
                  onChange={handleTextChange}
                  type="text"
                  placeholder="Where is this transaction from?"
                />
                </label>
                <br/>
                <label htmlFor="item_name">Item Name:
                <input
                  id="item_name"
                  value={transaction.item_name}
                  onChange={handleTextChange}
                  type="text"
                  placeholder="Name of the item?"
                />   
                </label>
                <br/>
                <input type="submit" />
              </form>
              <div>

                <Link to={`/transactions`}>
                    <button className="NewBackButton">Back</button>
                </Link>

            </div>
          </div>
        );
};