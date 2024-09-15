import React, { useState } from "react";

const DownloadCVButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "BhathiyaLakshan.pdf";
      link.download = "Bhathiya-Lakshan.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleDownloadClick}
      className={`bg-main text-white p-2 px-4 mr-4 font-sans rounded hover:bg-mainDark ${
        isDownloading ? "cursor-wait opacity-70" : ""
      }`}
      disabled={isDownloading}
    >
      {isDownloading ? "Downloading..." : "Download Resume"}
    </button>
  );
};

export default DownloadCVButton;
