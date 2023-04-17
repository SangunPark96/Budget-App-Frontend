import { Link } from "react-router-dom"

export default function Transaction({ budget, index}) {
    return(
        <div className="Transaction Log">
       
        <h1>{budget.item_name}</h1>
        <h2>{budget.category}</h2>
        <p>{budget.id} was purchased from the {budget.from} on {budget.date} for ${budget.amount}</p>

        <p>
          <Link to={`/transactions/${index}`}>{budget.title}</Link>
        </p>
      </div>
    )
}