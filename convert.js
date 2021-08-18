const {writeFile} = require('fs/promises');
const XLSX = require('xlsx');
const workbook = XLSX.readFile('sample.xlsx');
const {SheetNames} = workbook;

(async function () {
    for await (sheet of SheetNames) {
        const csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheet]); // default : ","
        const fileName = `${sheet}.csv`;
        console.log('Writing file to ' + fileName);
        await writeFile(fileName, csv);
    }
})();

