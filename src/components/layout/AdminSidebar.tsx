import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BarChart3,
  UserPlus,
  Users,
  Activity,
  FileText,
  ClipboardCheck,
  Calendar,
  Ruler,
  CheckSquare,
  ExternalLink
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Website Home', path: '/', icon: ExternalLink },
    { name: 'Dashboard', path: '/admin', icon: BarChart3 },
    { name: 'Join Now Form', path: '/admin/join-requests', icon: UserPlus },
    { name: 'Students', path: '/admin/students', icon: Users },
    { name: 'Movements', path: '/admin/movements', icon: Activity },
    { name: 'Create Lesson Plan', path: '/admin/lesson-plans', icon: FileText },
    { name: 'Mark Attendance', path: '/admin/mark-attendance', icon: ClipboardCheck },
    { name: 'Attendance Records', path: '/admin/attendance-records', icon: Calendar },
    { name: 'Measurements', path: '/admin/measurements', icon: Ruler },
    { name: 'Portion Tracker', path: '/admin/portion-tracker', icon: CheckSquare },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-red-100 text-red-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;