import { prisma } from "@/lib/prisma";

export default async function InventoryPage() {

  const products =
    await prisma.product.findMany();

  return (

    <table>

      <thead>

        <tr>

          <th>Name</th>

          <th>Inventory</th>

        </tr>

      </thead>

      <tbody>

        {products.map(product => (

          <tr key={product.id}>

            <td>
              {product.name}
            </td>

            <td>
              {product.inventory}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );
}
