import { getDocument, GlobalWorkerOptions, version } from "pdfjs-dist";

const pdfjs = {
  version,
};

// Configure PDF.js worker
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const convertPDFToText = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      try {
        const pdf = await getDocument(arrayBuffer).promise;
        const textContent = await getTextFromPDF(pdf);
        resolve(textContent);
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsArrayBuffer(file);
  });
};

const getTextFromPDF = async (pdf) => {
  const numPages = pdf.numPages;
  let fullText = "";

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    textContent.items.forEach((item) => {
      fullText += item.str + " ";
    });
  }

  return fullText.trim();
};
