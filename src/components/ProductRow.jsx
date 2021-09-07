import React from 'react'

function ProductRow({ gid, gname, gprice, onSelectProduct }) {
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [value, setValue] = React.useState(0)
    const handleChange = (e) => {
        setValue(value)
        setTotalPrice(e.target.value * gprice)
        const product = {
            id: gid,
            count: Number(e.target.value),
            totalPrice: e.target.value * gprice,
            name: gname
        }
        onSelectProduct(product)
    }

    return (
        <tr>
            <td>
                {gid}
            </td>
            <td>
                {gname}
            </td>
            <td>
                {gprice}
            </td>
            <td>
                <input type="number" onChange={handleChange} defaultValue={value}/>
            </td>
            <td>
                {totalPrice}
            </td>
        </tr>
    )
}

export default ProductRow
