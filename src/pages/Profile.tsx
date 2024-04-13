import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonRow,
  IonCol,
} from '@ionic/react';
import './Profile.css';

const Profile: React.FC = () => {
  const [showClickMeAlert, setShowClickMeAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  // Handler functions for buttons and actions
  const handleEditProfile = () => {
    console.log('Edit profile');
    // Add your code to handle profile editing
  };

  const handleChangeProfilePicture = () => {
    console.log('Change profile picture');
    // Add your code to handle changing the profile picture
  };

  const handleChangeCoverPhoto = () => {
    console.log('Change cover photo');
    // Add your code to handle changing the cover photo
  };

  const handleDeleteProfile = () => {
    console.log('Delete profile');
    // Add your code to handle deleting the profile
  };

  const handleCreateAnotherProfile = () => {
    console.log('Create another profile');
    // Add your code to handle creating another profile
  };

  // Array of image URLs for user's posts
  const postImages = [
    '../src/assets/img/1.jpg',
    '../src/assets/img/2.jpg',
    '../src/assets/img/3.jpg',
    '../src/assets/img/4.jpg',
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
  {/* Cover photo */}
  <div className="profile-cover-container">
    <div className="cover-photo">
      <img alt="Cover Photo" src="../src/assets/img/cover.jpg" />
    </div>
    {/* Profile container */}
    <div className="profile-info-container">
      {/* Profile picture */}
      <IonAvatar className="profile-picture">
        <img alt="Profile Picture" src="../src/assets/img/jprof.jpg" />
      </IonAvatar>
      {/* User info */}
      <div className="profile-info">
        <h2>Jesame C. Sawan-on</h2>
        <p>Motto in Life: "If you can DREAM it, you can DO it"</p>
      </div>
    </div>
  </div>

        {/* Posts grid */}
        <div className="posts-grid">
          {postImages.map((image, index) => (
            <img key={index} src={image} alt={`Post ${index + 1}`} />
          ))}
        </div>

        {/* Buttons container */}
        <div className="buttons-container">
          {/* "Click Me" button */}
          <IonButton
            id="present-alert"
            color="warning"
            expand="full"
            onClick={() => setShowClickMeAlert(true)}
          >
            Click Me
          </IonButton>
          <IonAlert
            isOpen={showClickMeAlert}
            onDidDismiss={() => setShowClickMeAlert(false)}
            header="A Short Title Is Best"
            subHeader="A Sub Header Is Optional"
            message="A message should be a short, complete sentence."
            buttons={['Action']}
          />

          {/* "Actions" button */}
          <IonButton
            id="open-action-sheet"
            expand="full"
            onClick={() => setShowActionSheet(true)}
          >
            Actions
          </IonButton>
          <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            header="Profile Actions"
            buttons={[
              {
                text: 'Edit Profile',
                handler: handleEditProfile,
              },
              {
                text: 'Change Profile Picture',
                handler: handleChangeProfilePicture,
              },
              {
                text: 'Change Cover Photo',
                handler: handleChangeCoverPhoto,
              },
              {
                text: 'Delete Profile',
                role: 'destructive',
                handler: handleDeleteProfile,
              },
              {
                text: 'Create Another Profile',
                handler: handleCreateAnotherProfile,
              },
              {
                text: 'Cancel',
                role: 'cancel',
              },
            ]}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
