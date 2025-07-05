import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';

const Movements: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Movements</h1>
        <p className="text-gray-600 mt-2">Manage karate movements and techniques.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Movement Library</CardTitle>
          <CardDescription>Add and manage karate movements and techniques</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Movement management functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Movements;