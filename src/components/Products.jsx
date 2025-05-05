export const Products = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Nuestros Productos
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Explora nuestra lista de productos diseñados para ayudarte en tu día a día.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Descripción
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              Categoría
            </th>
            <th scope="col" className="px-6 py-3">
              Marca
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </th>
            <td className="px-6 py-4">
              Teclado Mecánico
            </td>
            <td className="px-6 py-4">
              Teclado retroiluminado con switches azules
            </td>
            <td className="px-6 py-4">
              $45.99
            </td>
            <td className="px-6 py-4">
              Accesorios
            </td>
            <td className="px-6 py-4">
              Logitech
            </td>
            <td className="px-6 py-4">
              20
            </td>
            <td className="px-6 py-4 text-right">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">Editar</button>
              <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};