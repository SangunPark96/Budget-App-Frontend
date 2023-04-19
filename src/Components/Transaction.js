import { Link } from "react-router-dom"

export default function Transaction({ budget, index}) {



    return(
        <tr className="Transaction Log">
          <td>
          {budget.type.toLowerCase() === "withdrawal" ? (
            <span> 😰 </span>
          ) : (
            <span> 🤑 </span>
          )}
          </td>
       <td>{budget.date}</td>
        <td><Link to={`/transactions/${index}`}>{budget.item_name}</Link></td>
<td>{budget.type.toLowerCase() === "withdrawal" ? (
            <span className="minus-sign"> - </span>
          ) : (
            <span className="plus-sign"> + </span>
          )}${budget.amount}</td>
        
      </tr>
    )
}