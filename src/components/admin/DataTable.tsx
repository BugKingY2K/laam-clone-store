type Column = {
  key: string;
  label: string;
};

type Props = {
  columns: Column[];
  rows: Record<string, any>[];
};

export default function DataTable({
  columns,
  rows
}: Props) {

  return (

    <table className="w-full border">

      <thead>

        <tr>

          {columns.map(col => (

            <th
              key={col.key}
              className="border p-3 text-left"
            >
              {col.label}
            </th>

          ))}

        </tr>

      </thead>

      <tbody>

        {rows.map((row,index)=> (

          <tr key={index}>

            {columns.map(col => (

              <td
                key={col.key}
                className="border p-3"
              >
                {row[col.key]}
              </td>

            ))}

          </tr>

        ))}

      </tbody>

    </table>
  );
}
