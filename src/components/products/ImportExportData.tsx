'use client';

import { Tabs } from "../ui/Tabs";
import Import from "./Import";

const ImportExportData = () => {
  return <div className="p-4">
      <h1 className='text-2xl text-black font-bold'>Import Export Data</h1>

      <div className='mt-4'>
        <Tabs
          tabs={[
            {
              id: 'import',
              label: 'Import',
              content: <Import />
            },
            
          ]}
        />
      </div>


  </div>;
};

export default ImportExportData;
