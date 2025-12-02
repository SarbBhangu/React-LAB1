import React from "react";
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div>
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={user.name}
          width={60}
          height={60}
        />
      )}

      <h2>{user.name}</h2>

      {showEmail && <p>Email: {user.email}</p>}

      {showRole && <p>Role: {user.role}</p>}

      {children}

      {onEdit && (
        <button onClick={() => onEdit(user.id)}>
          Edit
        </button>
      )}
    </div>
  );
};

