import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
// import { v4 as uuidv4 } from "uuid";

import { modalEventsActive } from "../../action/ui";
import { useForm } from "../../hooks/useForm";
import { StartAddProduct } from "../../action/Products";
import { fileUpload } from "../../helpers/fileUpload";
import { useState } from "react";
// import { Spinner } from "./Spinner";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const AddImageModal = () => {
  const { modalOpen } = useSelector((state) => state.ui);

  const [msgError, setMsgError] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    inputFiles: null,
    desc: "",
    name: "",
    price: 0,
    status: "",
  });
  const { inputFiles, desc, name, price, status } = formValues;

  const closeModal = () => {
    dispatch(modalEventsActive());
  };
  const handleAddnewImage = () => {
    document.querySelector("#addfile").click();
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (name.trim().length <= 2) {
      setMsgError("el nombre debe de tener almenos 2 caracteres");
      return;
    } else if (price <= 0) {
      setMsgError("el precio debe de ser mayor de 0");
      return;
    } else if (!inputFiles) {
      setMsgError("por favor seleccione una imagen valida");
      return;
    }
    const data = await fileUpload(inputFiles[0]);
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
    setIsloading(true);

    dispatch(
      StartAddProduct("611a98adc0e8560c2ca827a9", name, parseFloat(price), data)
    );
    dispatch(modalEventsActive());
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      overlayClassName="modal-fondo"
    >
      <form
        className="flex flex-col space-y-4 text-center w-64 sm:w-80 h-auto"
        onSubmit={handleSubmitForm}
      >
        <h1 className="font-bold text-2xl text-gray-500">Sube un producto</h1>
        <p className="text-sm text-gray-400">File should be jpeg, png...</p>
        {msgError && (
          <div className="bg-red-500 w-full max-w-xs h-20 text-center flex justify-center items-center rounded text-lg font-semibold text-white mb-5 p-4">
            {msgError}
          </div>
        )}
        <input
          type="file"
          id="addfile"
          className="hidden"
          onChange={handleInputChange}
          name="inputFiles"
        />
        <div className="flex flex-col">
          <div className="p-4 w-full  mx-auto flex flex-col space-y-2 border-dashed border-2 rounded-lg border-blue-400 border-light-blue-500">
            <img
              onClick={handleAddnewImage}
              className="w-2/6 h-full mx-auto object-cover cursor-pointer"
              alt=""
              src="https://cdn0.iconfinder.com/data/icons/dicticons-files-folders/32/file_image_upload-512.png"
            />
            {/* <textarea
              className="resize-none border-b-2 w-full mx-auto h-24 p-2 border-blue-400 focus:outline-none"
              autoFocus
              type="text"
              placeholder="description"
              onChange={handleInputChange}
              name="desc"
            ></textarea> */}
            <input
              placeholder="Nombre del producto"
              name="name"
              onChange={handleInputChange}
              className="input border-b-2 border-blue-400 w-11/12 mx-auto p-2"
            />
            <input
              placeholder="Precio (sin puntos)"
              type="number"
              name="price"
              onChange={handleInputChange}
              // value={formatterPeso.format(price)}
              className="input border-b-2 border-blue-400 w-11/12 mx-auto p-2"
            />
            {/* <input placeholder="Nombre del producto" name="name" onChange={handleInputChange} /> */}
            <button
              type="button"
              onClick={handleAddnewImage}
              className="flex items-center justify-center px-2 py-2 w-11/12 focus:ring-2 transform focus:scale-105 hover:text-white hover:bg-blue-500 font-semibold mx-auto border border-blue-300 rounded-md transition duration-200"
            >
              <span className="material-icons mr-2">folder</span>
              seleccionar imagen
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="px-2 py-2 w-full text-white font-semibold mx-auto bg-red-500 hover:bg-red-600 focus:ring-4 rounded-md transform focus:scale-105 transition duration-200"
        >
          {
            !isLoading
              ? "subir"
              : // <div>
                "subiendo espere"
            // <Spinner />
            // </div>
          }
        </button>
      </form>
    </Modal>
  );
};
