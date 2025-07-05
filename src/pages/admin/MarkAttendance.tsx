import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';

const MarkAttendance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mark Attendance</h1>
        <p className="text-gray-600 mt-2">Record student attendance for classes.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Class Attendance</CardTitle>
          <CardDescription>Mark attendance for today's classes</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Attendance marking functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkAttendance;