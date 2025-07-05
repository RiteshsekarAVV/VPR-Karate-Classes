import React from 'react';
import { Shield, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner';

const AdminHeader: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-3">
        <Shield className="h-8 w-8 text-red-600" />
        <div>
          <h1 className="text-xl font-bold text-gray-900">VPR Karate Classes</h1>
          <p className="text-xs text-gray-500">Admin Portal</p>
        </div>
      </div>
      
      <Button
        variant="outline"
        onClick={handleLogout}
        className="flex items-center space-x-2"
      >
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </Button>
    </header>
  );
};

export default AdminHeader;