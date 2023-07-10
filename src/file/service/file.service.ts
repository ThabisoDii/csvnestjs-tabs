import { Injectable } from '@nestjs/common';
import { createObjectCsvWriter } from 'csv-writer';

@Injectable()
export class FileService {

    async generateCsv() {
        const csvWriter = createObjectCsvWriter({
          path: 'data.csv', // Specify the path and filename for the CSV file
          //csv columns
          header: [
            {id: 'number',title : 'id_number'},
            { id: 'first_name', title: 'first_name' },
            { id: 'last_name', title: 'last_name' },
            { id: 'email', title: 'email' },
            
          ],
        });
    
        const data = [
          { name: 'Thabiso Diphare', email: 'john@example.com', age: 26 },
          { name: 'Sewa Diphare', email: 'jane@example.com', age: 3 },
          // Add more data rows as needed
        ];
    
        await csvWriter.writeRecords(data);
        console.log('CSV file has been generated.');
      }


}
