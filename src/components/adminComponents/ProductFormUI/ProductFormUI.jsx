import "./ProductFormUI.css";

export const ProductFormUI = ({
  book,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section className="form-arg">
      <form onSubmit={onSubmit}>
        <h2>Agregar Producto</h2>
        <div>
          <label>Nombre del Libro:</label>
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={onChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={book.price}
            onChange={onChange}
            required
          />
          {errors.name && <p className="error">{errors.price}</p>}
        </div>
        <div>
          <label>Categoria:</label>
          <input
            type="text"
            name="category"
            value={book.category}
            onChange={onChange}
            required
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div>
          <label>Descripcion:</label>
          <textarea
            name="description"
            value={book.description}
            onChange={onChange}
            required
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "guardando" : "Guardar"}
        </button>
      </form>
    </section>
  );
};
