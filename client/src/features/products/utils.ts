import imageCompression from "browser-image-compression";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleImageChange = async (event: any,setCompressedBase64: React.Dispatch<React.SetStateAction<string>>) => {
  const file = event;

  if (file) {
    try {
      const options = {
        maxSizeMB: 0.1, // Compress to 100KB
        maxWidthOrHeight: 800, // Resize if needed
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        setCompressedBase64(reader.result as string);
      };
    } catch (error) {
      console.error("Image compression error:", error);
    }
  }
};

export const decompressBase64 = (base64: string, maxWidth: number, maxHeight: number): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
  
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg")); // Ensuring it returns a string
      };
    });
  };
  
//   // Usage Example:
//   decompressBase64(compressedBase64, 1000, 1000).then((resizedBase64) => {
//     console.log("Decompressed Image:", resizedBase64);
//   });
