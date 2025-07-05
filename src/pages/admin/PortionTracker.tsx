import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';

const PortionTracker: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Portion Tracker</h1>
        <p className="text-gray-600 mt-2">Track student progress on movement portions.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Movement Progress</CardTitle>
          <CardDescription>Monitor student completion of movement portions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Portion tracker functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortionTracker;