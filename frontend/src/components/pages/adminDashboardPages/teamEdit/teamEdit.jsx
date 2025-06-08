import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TeamEdit = () => {
  const { id } = useParams();
  
  return (
    <div className="dash-team-edit">
      <div className="dash-create-header">
        <div className="dash-create-header-left">
          <Link to="/admin/team" className="dash-back-link">
            <ArrowLeft size={20} />
            <span>Back to Team</span>
          </Link>
          <h1 className="dash-create-title">Edit Team Member</h1>
        </div>
      </div>
      
      <div style={{ 
        padding: '3rem', 
        textAlign: 'center', 
        color: 'var(--text-secondary)' 
      }}>
        <p>Editing team member with ID: {id}</p>
        <p>Team member edit form will be implemented here</p>
      </div>
    </div>
  );
};

export default TeamEdit;