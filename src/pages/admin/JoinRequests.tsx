import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';

const JoinRequests: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Join Requests</h1>
        <p className="text-gray-600 mt-2">Manage student join requests and inquiries.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Join Requests Management</CardTitle>
          <CardDescription>Review and respond to student join requests</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Join requests functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinRequests;