import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Mail,
  Shield,
  UserCheck,
  UserX,
  MoreVertical
} from 'lucide-react';
import api from '../../../../utils/request';
import { useAuth } from '../../../../context/authContext';
import './style.css';

const TeamList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user: currentUser } = useAuth();

  const roles = ['all', 'admin', 'editor', 'author'];

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.users.getAll();
      setUsers(response.data.data || response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to load team members');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (userId, isActive) => {
    try {
      if (isActive) {
        await api.users.deactivateUser(userId);
      } else {
        await api.users.activateUser(userId);
      }
      fetchUsers();
    } catch (error) {
      console.error('Error toggling user status:', error);
      alert('Failed to update user status');
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      try {
        await api.users.deleteUser(userId);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete team member');
      }
    }
  };

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case 'admin':
        return 'dash-role-admin';
      case 'editor':
        return 'dash-role-editor';
      case 'author':
        return 'dash-role-author';
      default:
        return '';
    }
  };

  const getPermissionLabels = (permissions = []) => {
    const permissionMap = {
      'blogs': 'Blogs',
      'manage_team': 'Team Management',
      'manage_invoices': 'Invoices',
      'manage_contacts': 'Contacts',
      'analytics': 'Analytics',
      'settings': 'Settings'
    };
    
    return permissions.map(p => permissionMap[p] || p);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    
    return matchesSearch && matchesRole;
  });

  return (
    <div className="dash-team">
      {/* Page Header */}
      <div className="dash-team-header">
        <div>
          <h1 className="dash-team-title">Team Members</h1>
          <p className="dash-team-subtitle">Manage your team and their permissions</p>
        </div>
        <Link to="/admin/team/create" className="dash-btn-primary">
          <Plus size={20} />
          <span>Add Team Member</span>
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="dash-team-controls">
        <div className="dash-team-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dash-search-input"
          />
        </div>

        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="dash-select"
        >
          {roles.map(role => (
            <option key={role} value={role}>
              {role === 'all' ? 'All Roles' : role.charAt(0).toUpperCase() + role.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Team List */}
      {loading ? (
        <div className="dash-team-loading">
          <div className="dash-spinner"></div>
          <p>Loading team members...</p>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="dash-team-empty">
          <p>No team members found</p>
        </div>
      ) : (
        <div className="dash-team-grid">
          {filteredUsers.map((member) => (
            <div key={member._id} className="dash-team-card">
              <div className="dash-team-card-header">
                <div className="dash-team-avatar">
                  {member.avatar ? (
                    <img src={member.avatarUrl || member.avatar} alt={member.name} />
                  ) : (
                    <span>{member.name.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <div className="dash-team-actions">
                  <button
                    className="dash-action-toggle"
                    onClick={() => setActiveDropdown(activeDropdown === member._id ? null : member._id)}
                  >
                    <MoreVertical size={20} />
                  </button>

                  {activeDropdown === member._id && (
                    <div className="dash-action-dropdown">
                      <Link 
                        to={`/admin/team/edit/${member._id}`}
                        className="dash-action-item"
                      >
                        <Edit size={16} />
                        Edit
                      </Link>
                      <button
                        onClick={() => handleToggleStatus(member._id, member.isActive)}
                        className="dash-action-item"
                      >
                        {member.isActive ? <UserX size={16} /> : <UserCheck size={16} />}
                        {member.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                      {currentUser.id !== member._id && (
                        <button
                          onClick={() => handleDelete(member._id)}
                          className="dash-action-item dash-action-danger"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="dash-team-info">
                <h3 className="dash-team-name">{member.name}</h3>
                <p className="dash-team-job">{member.jobTitle || 'Team Member'}</p>
                
                <div className="dash-team-meta">
                  <span className={`dash-team-role ${getRoleBadgeClass(member.role)}`}>
                    <Shield size={14} />
                    {member.role}
                  </span>
                  <span className={`dash-team-status ${member.isActive ? 'active' : 'inactive'}`}>
                    {member.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <a href={`mailto:${member.email}`} className="dash-team-email">
                  <Mail size={16} />
                  {member.email}
                </a>

                {member.permissions && member.permissions.length > 0 && (
                  <div className="dash-team-permissions">
                    <p className="dash-permissions-label">Permissions:</p>
                    <div className="dash-permissions-list">
                      {getPermissionLabels(member.permissions).map((permission, index) => (
                        <span key={index} className="dash-permission-tag">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="dash-team-stats">
                  <span>Joined {new Date(member.createdAt).toLocaleDateString()}</span>
                  {member.lastLogin && (
                    <span>Last login: {new Date(member.lastLogin).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamList;