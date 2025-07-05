import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';

const Students: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Students</h1>
        <p className="text-gray-600 mt-2">Manage student information and enrollment.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Management</CardTitle>
          <CardDescription>Add, edit, and manage student records</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Student management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Students;