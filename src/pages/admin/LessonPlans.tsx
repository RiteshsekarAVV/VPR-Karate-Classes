import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';

const LessonPlans: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Lesson Plans</h1>
        <p className="text-gray-600 mt-2">Create and manage weekly lesson plans.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lesson Plan Creator</CardTitle>
          <CardDescription>Plan your weekly training sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Lesson plan functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonPlans;