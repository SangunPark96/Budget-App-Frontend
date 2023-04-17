import { Link } from "react-router-dom"

export default function Transaction({ budget, index}) {


    // <h3>{budget.category}</h3>
    //     <p>{budget.id}</p>
    //     <p> {budget.from} </p>
    //     <p>{budget.date}</p> 
    //     <h2>${budget.amount}</h2>
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