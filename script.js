document.getElementById('pdfForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica");
    doc.setFontSize(22);
    doc.text("Datos del Formulario", 20, 20);

    doc.setFontSize(16);
    doc.text("Nombre:", 20, 40);
    doc.setFont("helvetica", "normal");
    doc.text(nombre, 50, 40);

    doc.setFont("helvetica", "bold");
    doc.text("Email:", 20, 50);
    doc.setFont("helvetica", "normal");
    doc.text(email, 50, 50);

    doc.save("formulario.pdf");
});
