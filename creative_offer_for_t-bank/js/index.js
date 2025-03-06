const data = [
    {
        id: "00",
        label: "Назначение платежа ",
        date: "01.01.2025",
        description: "Описание",
        sum: "100",
    },
    {
        id: "00",
        label: "Назначение платежа ",
        date: "01.01.2025",
        description: "Описание",
        sum: "10",
    },
    {
        id: "01",
        label: "Назначение платежа ",
        date: "10.01.2025",
        description: "Описание",
        sum: "100",
    },
    {
        id: "01",
        label: "Назначение платежа ",
        date: "10.01.2025",
        description: "Описание",
        sum: "10",
    },
    {
        id: "02",
        label: "Назначение платежа ",
        date: "20.01.2025",
        description: "Описание",
        sum: "100",
    },
    {
        id: "02",
        label: "Назначение платежа ",
        date: "20.01.2025",
        description: "Описание",
        sum: "10",
    },
    {
        id: "03",
        label: "Назначение платежа ",
        date: "30.01.2025",
        description: "Описание",
        sum: "100",
    },
    {
        id: "03",
        label: "Назначение платежа ",
        date: "30.01.2025",
        description: "Описание",
        sum: "10",
    },
    {
        id: "04",
        label: "Назначение платежа ",
        date: "05.02.2025",
        description: "Описание",
        sum: "100",
    },
    {
        id: "04",
        label: "Назначение платежа ",
        date: "05.02.2025",
        description: "Описание",
        sum: "100",
    },
    {
        id: "05",
        label: "Назначение платежа ",
        date: "10.02.2025",
        description: "Описание",
        sum: "0",
    },
    {
        id: "06",
        label: "Назначение платежа ",
        date: "10.02.2025",
        description: "Описание",
        sum: "300",
    },
];
const mergeBtn = document.getElementById("merge");
const saveBtn = document.getElementById("save");

function createTable() {
    const container = document.getElementById("table");

    const table = document.createElement("table");
    table.setAttribute("border", 2);
    table.classList.add("table");

    const caption = document.createElement("caption");
    caption.textContent = "Картотека: Демо";
    table.appendChild(caption);

    const thead = table.appendChild(document.createElement("thead"));
    const tr = thead.appendChild(document.createElement("tr"));

    const columnTexts = Object.keys(data[0]);
    columnTexts.forEach((columnText) => {
        tr.appendChild(document.createElement("th")).textContent = columnText;
    });

    const tbody = table.appendChild(document.createElement("tbody"));
    data.forEach((item) => {
        const tr = tbody.appendChild(document.createElement("tr"));
        Object.values(item).forEach((value) => {
            tr.appendChild(document.createElement("td")).textContent = value;
        });
    });

    container.appendChild(table);
}
createTable();
// import{ Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType, HeadingLevel, AlignmentType } from '../node_modules/docx/dist/index'
// const { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType, HeadingLevel, AlignmentType } = window.docx;

function createMergeTable() {
    const container = document.getElementById("tableMerge");
    container.innerHTML = ""; // Очищаем контейнер перед отрисовкой

    const tableElement = document.querySelector("table");
    if (!tableElement) return;

    const rows = Array.from(tableElement.querySelectorAll("tbody tr"));
    const extractedData = rows.map((row) => {
        const cells = row.querySelectorAll("td");
        return {
            id: cells[0].textContent.trim(),
            label: cells[1].textContent.trim(),
            date: cells[2].textContent.trim(),
            description: cells[3].textContent.trim(),
            sum: parseFloat(cells[4].textContent.trim()) || 0,
        };
    });

    const mergedData = extractedData
        .filter((item) => Math.abs(item.sum) > 0)
        .reduce((acc, item) => {
            const existingItem = acc.find((el) => el.id === item.id);
            if (existingItem) {
                existingItem.sum += item.sum;
            } else {
                acc.push({ ...item });
            }
            return acc;
        }, []);

    // Создание новой таблицы
    const newTable = document.createElement("table");
    newTable.classList.add("table");

    const caption = document.createElement("caption");
    caption.textContent = "Объединенные данные";
    newTable.appendChild(caption);

    const thead = newTable.appendChild(document.createElement("thead"));
    const tr = thead.appendChild(document.createElement("tr"));
    ["ID", "Label", "Date", "Description", "Sum"].forEach((columnText) => {
        tr.appendChild(document.createElement("th")).textContent = columnText;
    });

    const tbody = newTable.appendChild(document.createElement("tbody"));

    mergedData.forEach((item) => {
        const tr = tbody.appendChild(document.createElement("tr"));
        Object.values(item).forEach((value) => {
            tr.appendChild(document.createElement("td")).textContent = value;
        });
    });

    container.appendChild(newTable);
}

// function saveTableAsDocx() {
//    if (typeof docx === "undefined") {
//        console.error("Библиотека docx не подключена!");
//        return;
//    }

//    const tableElement = document.querySelector("#tableMerge table");
//    if (!tableElement) {
//        alert("Сначала объедините данные!");
//        return;
//    }

//    const rows = Array.from(tableElement.querySelectorAll("tbody tr"));
//    const extractedData = rows.map((row) => {
//        const cells = row.querySelectorAll("td");
//        return {
//            id: cells[0].textContent.trim(),
//            label: cells[1].textContent.trim(),
//            date: cells[2].textContent.trim(),
//            description: cells[3].textContent.trim(),
//            sum: cells[4].textContent.trim(),
//        };
//    });

//    const doc = new docx.Document();

//    doc.addSection({
//        children: [
//            new docx.Paragraph({
//                text: "Объединенные данные",
//                heading: docx.HeadingLevel.HEADING_1,
//                alignment: docx.AlignmentType.CENTER,
//            }),
//        ],
//    });

//    const tableRows = extractedData.map((item) => {
//        return new docx.TableRow({
//            children: [
//                new docx.TableCell({ children: [new docx.Paragraph(item.id)] }),
//                new docx.TableCell({ children: [new docx.Paragraph(item.label)] }),
//                new docx.TableCell({ children: [new docx.Paragraph(item.date)] }),
//                new docx.TableCell({ children: [new docx.Paragraph(item.description)] }),
//                new docx.TableCell({ children: [new docx.Paragraph(item.sum)] }),
//            ],
//        });
//    });

//    const table = new docx.Table({
//        rows: [
//            new docx.TableRow({
//                children: [
//                    new docx.TableCell({ children: [new docx.Paragraph("ID")] }),
//                    new docx.TableCell({ children: [new docx.Paragraph("Label")] }),
//                    new docx.TableCell({ children: [new docx.Paragraph("Date")] }),
//                    new docx.TableCell({ children: [new docx.Paragraph("Description")] }),
//                    new docx.TableCell({ children: [new docx.Paragraph("Sum")] }),
//                ],
//            }),
//            ...tableRows,
//        ],
//        width: { size: 100, type: docx.WidthType.PERCENTAGE },
//    });

//    doc.addSection({ children: [table] });

//    docx.Packer.toBlob(doc).then((blob) => {
//        const link = document.createElement("a");
//        link.href = URL.createObjectURL(blob);
//        link.download = "merged_table.docx";
//        link.click();
//        URL.revokeObjectURL(link.href);
//    });
// }

// document.getElementById("saveBtn").addEventListener("click", saveTableAsDocx);

mergeBtn.addEventListener("click", createMergeTable);
// saveBtn.addEventListener("click", saveTableAsDocx);
