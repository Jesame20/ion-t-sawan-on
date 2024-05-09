import React, { useState } from 'react';
import './style.css';
import './Clickcounter.css';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon, IonLabel
} from '@ionic/react';
import { arrowBack, homeOutline } from 'ionicons/icons';
import './Clickcounter.css';

const ClickCounter: React.FC = () => {
  // State variable to keep track of the click count
  const [clickCount, setClickCount] = useState(0);

  // Function to reset the click counter
  const resetClickCount = () => {
    setClickCount(0);
  };

  return (
    <IonPage className="general-background">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
          <IonButton routerDirection="root" routerLink="/ionic-t-sawan-on/home" slot="start">
            <IonIcon aria-hidden="true" icon={arrowBack} />
          </IonButton>
        </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
      <div className="clickcounter-container">
      <header>
        <h1>Click, count, conquer</h1>
      </header>
        <IonCard>
          <IonCardContent className="click-counter">
          
            <div className="click-count-reset-container">
              <div className="click-counter-text">Click Count: {clickCount}</div>
              <IonButton
                onClick={resetClickCount}
                color="danger"
                className="reset-button"
              >
                Reset Count
              </IonButton>
            </div>


            <IonButton
              onClick={() => setClickCount(clickCount + 1)}
              color="primary"
              expand="full"
              className="click-button"
            >
              Click Here
            </IonButton>
          </IonCardContent>
        </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
