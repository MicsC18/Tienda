import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImages";
import { CreateLibro } from "../../../services/libros";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState("");
  const [file, setFile] = useState(null);
  const [book, setBook] = useState({
    name: "",
    author: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...book, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    try {
      const imageUrl = await uploadToImgbb(file);
      const bookData = {
        ...book,
        price: Number(book.price),
        imageUrl,
      };

      await CreateLibro(bookData);
      alert("Libro cargado con exito");

      setBook({
        name: "",
        author: "",
        price: "",
        category: "",
        desciption: "",
      });
      setFile(null);
    } catch (error) {
      setErrors({ general: error.massage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      book={book}
      errors={errors}
      onChange={handleChange}
      onFileChange={setFile}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};
