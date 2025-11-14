export const validateProduct = (book, fileRequired = true) => {
  const errors = {};

  if (!book.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!book.price || book.price <= 0) {
    errors.price = "El precio debe ser mayor a 0";
  }

  if (!book.description.trim()) {
    errors.name = "La descripcion es obligatoria";
  }

  if (!book.category.trim()) {
    errors.name = "La categoria es obligatoria";
  }

  if (fileRequired && !book.file) {
    errors.file = "Debe seleccionar una imagen";
  }

  return errors;
};
