import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Clickcounter.css';

const Clickcounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonButton onClick={incrementClickCount}>Click Me</IonButton>
          <p>Click Count: {clickCount}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Clickcounter;
