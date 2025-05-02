export const Products = () => {
    return (
      <>
        <h1>Products Page</h1>
        <div>
          <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Marca</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Teclado Mecánico</td>
                <td>Teclado retroiluminado con switches azules</td>
                <td>$45.99</td>
                <td>Accesorios</td>
                <td>Logitech</td>
                <td>20</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  