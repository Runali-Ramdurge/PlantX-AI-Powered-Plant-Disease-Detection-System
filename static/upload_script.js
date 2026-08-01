document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("file-upload");
  const fileNamesDisplay = document.getElementById("file-names");
  const previewContainer = document.getElementById("image-preview");
  const errorMessage = document.getElementById("error-message");
  const uploadBtn = document.getElementById("upload-btn");

  // File selection
  fileInput.addEventListener("change", function (event) {
    let files = event.target.files;
    let validFiles = [];
    let errorText = "";

    previewContainer.innerHTML = "<p style='color:white;'>Preview:</p>";

    if (files.length > 6) {
      errorText = "⚠️ You can only upload up to 6 images!";
    } else {
      for (let file of files) {
        if (file.size > 2 * 1024 * 1024) {
          errorText = "⚠️ Each image must be under 2MB!";
          break;
        }
        validFiles.push(file);
      }
    }

    if (errorText) {
      fileInput.value = "";
      fileNamesDisplay.textContent = "No files chosen";
      errorMessage.textContent = errorText;
      errorMessage.style.display = "block";
      uploadBtn.disabled = true;
    } else {
      errorMessage.style.display = "none";
      uploadBtn.disabled = false;

      fileNamesDisplay.textContent =
        validFiles.length > 0
          ? [...validFiles].map((f) => f.name).join(", ")
          : "No files chosen";

      validFiles.forEach((file) => {
        let reader = new FileReader();
        reader.onload = function (e) {
          let img = document.createElement("img");
          img.src = e.target.result;
          img.classList.add("preview-image");
          previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
    }
  });

  // Submit loading
  document.getElementById("uploadForm").addEventListener("submit", function () {
    document.getElementById("btn-text").style.display = "none";
    document.getElementById("loader").style.display = "inline";
    uploadBtn.disabled = true;
  });
});
