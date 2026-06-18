"use client";

export default function CategoryForm() {

  return (

    <form
      className="
      space-y-4"
    >

      <input

        placeholder="Category Name"

        className="
        border
        p-3
        w-full"
      />

      <button
        className="
        bg-black
        text-white
        px-5
        py-3"
      >

        Save Category

      </button>

    </form>
  );
}
