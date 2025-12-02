import React from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import type { User } from "./types";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay"; // (we’ll use this next)


<AlertBox
  type="success"
  message="Your profile has been updated successfully!"
  onClose={() => alert('Alert closed')}
>
  <p className="text-sm">You can now continue using the application.</p>
</AlertBox>

const user = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Software Engineer',
  avatarUrl: 'https://example.com/avatar.jpg'
};
 
<UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={(userId) => alert(`Editing user ${userId}`)}
>
  <div className="text-sm text-gray-500">
    Last login: 2 hours ago
  </div>
</UserProfileCard>







