type Props = {

  title: string;

  price: number;

  image: string;
};

export default function ProductCard({

  title,
  price,
  image

}: Props) {

  return (

    <div className="border rounded-xl overflow-hidden">

      <img
        src={image}
        alt={title}
        className="h-80 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-medium">

          {title}

        </h3>

        <p className="mt-2">

          PKR {price.toLocaleString()}
        </p>

      </div>

    </div>
  );
}
