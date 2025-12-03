import type { UserProfileCardProps } from "../../types";

export function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) {
  const handleEditClick = () => {
    if (onEdit) {
      onEdit(user.id);
      }
      };

    return (
    
    <div>
        {user.avatarUrl && (
        <img src={user.avatarUrl} alt={user.name} />
      )}

      <h2>{user.name}</h2>

      {showEmail && <p>Email: {user.email}</p>}
      {showRole && <p>Role: {user.role}</p>}

      {children}

      {onEdit && (
        <button onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
    
  );
}


