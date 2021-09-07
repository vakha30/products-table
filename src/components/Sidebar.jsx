import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar({ products }) {
    return (
        <div className="sidebar">
            <ul>
                {products &&
                    products.map((item, index) =>
                        <li key={item + '_' + index}>
                            <Link to={`/${item.rid}`}>{item.rname}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Sidebar
