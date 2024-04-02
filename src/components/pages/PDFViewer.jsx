import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';





function PDFViewer() {

    const pdf_file_path = '/RESUME_UPDATED.pdf'

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdf_file_path} />;
        </Worker>
    );
}

export default PDFViewer;