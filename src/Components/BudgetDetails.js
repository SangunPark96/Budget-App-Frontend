import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BudgetDetails() {

    const [budget, setBudget] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
        .then((res) => {
          setBudget(res.data);
          console.log(budget);
        }).catch(() => {
          navigate("/not-found")
        });
      }, []);

      const handleDelete = () => {
        axios
        .delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
        .then(() => {
          navigate(`/transactions`)
        })
      };

     

    return (
        <>
        <div className="BudgetDetails">
        <h1>{budget.item_name}</h1>
        <h5>{budget.id} from {budget.from}</h5>
        <h5>Amount: ${budget.amount}</h5>
        <h5>Category: {budget.category}</h5>
        <h5>Days since last crisis: {budget.daysSinceLastCrisis}</h5>
        </div>
        <div>
          <Link to={`/budgets`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        </>
    )
}