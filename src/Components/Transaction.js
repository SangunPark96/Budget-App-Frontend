import { Link } from "react-router-dom"

export default function Transaction({ budget, index}) {



    return(
        <tr className="Transaction Log">
       <td>{budget.category.toLowerCase() === "expense" ? (
            <span> ❌ </span>
          ) : (
            <span> 💰 </span>
          )}
          </td>
        <td><Link to={`/transactions/${index}`}>{budget.item_name}</Link></td>
<td>${budget.amount}</td>
        
      </tr>
    )
}