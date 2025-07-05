import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';

const Measurements: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Measurements</h1>
        <p className="text-gray-600 mt-2">Manage student dress measurements.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dress Measurements</CardTitle>
          <CardDescription>Record and track student uniform measurements</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Measurements functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Measurements;