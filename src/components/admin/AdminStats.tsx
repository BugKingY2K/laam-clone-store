export default function AdminStats({

  products,

  orders,

  customers,

  revenue

}:any) {

  return (

    <div
      className="
      grid
      md:grid-cols-4
      gap-6"
    >

      <Card
        title="Products"
        value={products}
      />

      <Card
        title="Orders"
        value={orders}
      />

      <Card
        title="Customers"
        value={customers}
      />

      <Card
        title="Revenue"
        value={`PKR ${revenue}`}
      />

    </div>

  );
}

function Card({

  title,

  value

}:any) {

  return (

    <div
      className="
      bg-white
      p-6
      rounded-xl"
    >

      <h3>{title}</h3>

      <p
        className="
        text-3xl
        font-bold"
      >
        {value}
      </p>

    </div>

  );
}
