import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonThumbnail
} from '@ionic/react';
import { arrowBack} from 'ionicons/icons';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

const QuoteGenerator: React.FC = () => {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] =  useState<number | null>(null);

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  // Function to generate a random message
  const renderRandomMessage = () => {
    if (randomIndex!== null) {
      return quotes[randomIndex];
    } else {
      return '';
    }
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(0);
    setShowAlert(false);
  };

  // Read Firebase Data
  useState(() => {
    const q = collection(db, 'Qoutegenerator');
    getDocs(q).then((snapshot) => {
      const quotesArray = snapshot.docs.map(doc => doc.data().Qoute);
      setQuotes(quotesArray);
    });
  }, );
  
  return (
    <IonPage className="general-background">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quote Generator</IonTitle>
          <IonButton routerDirection="root" routerLink="/home" slot="start">
            <IonIcon aria-hidden="true" icon={arrowBack} />
            </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quote Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <img
            alt="Silhouette of mountains"
            src="https://i.kym-cdn.com/photos/images/original/002/578/699/9c8.gif"
            style={{ display: 'block', margin: '0 auto' }}
            />
          <IonGrid>
            <IonRow>
                <IonCol size="" push="">
                <IonButton id="present-alert" color="warning" expand="full" onClick={handleOpenAlert}>Click me</IonButton> 
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
                  header="Rizz"
                  subHeader=""
                  message={renderRandomMessage()}
                  buttons={['Close']}
                />
                </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default  QuoteGenerator;