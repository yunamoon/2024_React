
export default function CategoryRow({category} : {
    category:string
  }) {
    return (
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
    )
  }
  