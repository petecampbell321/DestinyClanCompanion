import React from 'react';

const User = ({ displayName, membershipId }) => {
  return (
    <div>
      <div>Display Name: {displayName}</div>
      <div>Membership ID: {membershipId}</div>
    </div>
  );
};

export default User;