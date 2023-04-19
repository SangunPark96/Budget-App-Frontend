import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function BudgetEditForm() {

    let { index } = useParams();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({
        amount: "",
        category: "",
        date: "",
        from: "",
        id: "",
        item_name: "",
        product: "",
        type: ""
      });

      useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`).then((res) => {
          setTransaction(res.data);
        }).catch((e) => {
          console.log(e)
        })
      }, [index]);

    const handleCategorySelect = (event) => {
        setTransaction({...transaction, category: event.target.value});
      };
    
    const handleTypeSelect = (event) => {
        setTransaction({...transaction, type: event.target.value});
      };
    

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
      };
    

 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
    .then((res) => {
      setTransaction(res.data)
      navigate(`/transactions/${index}`)
    }).catch((e) => {
      console.log(e)
    })
  };


    return (
        <div className="NewForm">
                <h1>Add A Transaction</h1>
                <form onSubmit={handleSubmit}>
<br/>
                    Type:

               <select id="type-select" value={transaction.type} onChange={handleTypeSelect}>  
               <option value="">-Please choose a type-</option>
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
                  onChange={handleTextChange}
                />
                </label>
<br/>
                Category:
<br/>
                <select id="category-select" value={transaction.category} onChange={handleCategorySelect}>
                <option value="">--Please choose an option--</option>
                <option value="Important">Important</option>
                <option value="Dumb">Dumb</option>
                <option value="Business">Business</option>
                </select>
<br/>
<br/>
                <label htmlFor="amount">Amount:
                <input
                  id="amount"
                  type="text"
                  value={transaction.amount}
                  onChange={handleTextChange}
                />
                </label>
                <br/>
                <label htmlFor="from">From:
                <input
                  id="from"
                  value={transaction.from}
                  onChange={handleTextChange}
                  type="text"
                />
                </label>
<br/>
                <label htmlFor="item_name">Item Name:
                <input
                  id="item_name"
                  value={transaction.item_name}
                  onChange={handleTextChange}
                  type="text"
                />   
                </label>
                <br/>
                <label htmlFor="date">Date:
                <input
                  id="date"
                  value={transaction.date}
                />   
                </label>
                <br/>
                <br/>
                <label htmlFor="id">ID:
                
                <input
                  id="id"
                  value={transaction.id}
                  type="text"
                />   
                </label>

                <input type="submit"/>

              </form>

                <Link to={`/transactions/${index}`}>
                  <button> Nevermind! </button>
                </Link>

            <div>
                <Link to={`/transactions`}>
                  <button>Back</button>
                </Link>
            </div>
        </div>
          );
}