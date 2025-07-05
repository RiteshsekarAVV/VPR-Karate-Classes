import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { Download } from 'lucide-react';

const AttendanceRecords: React.FC = () => {
  const handleExportToExcel = () => {
    // Excel export functionality will be implemented here
    console.log('Export to Excel functionality coming soon...');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance Records</h1>
          <p className="text-gray-600 mt-2">View and export attendance records.</p>
        </div>
        <Button onClick={handleExportToExcel} className="bg-green-600 hover:bg-green-700">
          <Download className="h-4 w-4 mr-2" />
          Export to Excel
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance History</CardTitle>
          <CardDescription>Filter and view attendance records</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Attendance records functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceRecords;