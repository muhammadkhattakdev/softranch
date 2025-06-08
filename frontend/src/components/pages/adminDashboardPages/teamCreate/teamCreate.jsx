import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TeamCreate = () => {
  return (
    <div className="dash-team-create">
      <div className="dash-create-header">
        <div className="dash-create-header-left">
          <Link to="/admin/team" className="dash-back-link">
            <ArrowLeft size={20} />
            <span>Back to Team</span>
          </Link>
          <h1 className="dash-create-title">Add Team Member</h1>
        </div>
      </div>
      
      <div style={{ 
        padding: '3rem', 
        textAlign: 'center', 
        color: 'var(--text-secondary)' 
      }}>
        <p>Team member creation form will be implemented here</p>
      </div>
    </div>
  );
};

export default TeamCreate;