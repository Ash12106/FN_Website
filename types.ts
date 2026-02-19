export type UserRole = 'student' | 'faculty';
export type AuthMode = 'signin' | 'signup';

export interface PortalConfig {
  role: UserRole;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  colorClass: string; // Tailwind color class prefix e.g., 'primary' or 'secondary'
}