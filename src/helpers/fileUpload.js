import Swal from "sweetalert2";
require("dotenv").config();

export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/jojouwu/upload";
  const formData = new FormData();
  formData.append("upload_preset", "jojo_uwu");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloupResp = await resp.json();
      console.log(cloupResp);
      Swal.fire({
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: true,
      });
      return cloupResp.secure_url;
    } else {
      const { error } = await resp.json();
      console.log("uwu");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  } catch (error) {
    console.log("uwu1");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error,
    });
  }
};
// CLOUDINARY_URL=cloudinary://519815685824518:eX1zgMkmnXXKKF606LMsxEgvcTs@jojouwu
