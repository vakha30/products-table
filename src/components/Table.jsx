import React from 'react'
import { useParams } from 'react-router-dom'
import ProductRow from './ProductRow'

function Table({ products, onSelectProduct }) {
    const {id} = useParams()
    let filterProducts = []
    if (id !== undefined) {
        filterProducts = products.filter(item => item.rid === id)
    } else {
        filterProducts = products
    }
    return (
        <table>
            {products &&
                filterProducts.map((product, index) =>
                    <tbody key={product.rid + '_' + index}>
                        <tr>
                            <th colSpan="5"><h1>{product.rname}</h1></th>
                        </tr>
                        {
                            product.goods.map(item =>
                                <ProductRow key={item.gid} {...item} onSelectProduct={onSelectProduct} />
                            )
                        }
                    </tbody>
                )
            }
        </table>
    )
}

export default Table
