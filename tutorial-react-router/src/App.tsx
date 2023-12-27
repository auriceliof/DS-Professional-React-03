import './App.css'
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
      >
    <Link to="/invoices">Invoices</Link> | {" "}
    <Link to="expenses">Expenses</Link>

    </nav>
  )
}
