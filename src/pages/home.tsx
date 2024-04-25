import React from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent,  
    IonCardSubtitle, IonCardTitle, IonCard, IonList, IonItem,IonThumbnail, IonLabel
} from '@ionic/react';
import { IonRouterLink } from '@ionic/react';
import './home.css';


  const Home: React.FC = () => {
    return (
      <IonPage className="general-background">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <div className="home-container">
      <header>
        <h1>Welcome to My App</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      <IonCard>
      <IonCardContent>
        <IonList>
        <IonRouterLink href="/Clickcounter">
              <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://img.freepik.com/premium-vector/click-arrow-touch-point-logo-template-design-vector-emblem-design-concept-creative-symbol_20029-363.jpg" />
                  </IonThumbnail>
                  <IonLabel>Click Counter</IonLabel>
              </IonItem>
                </IonRouterLink>
              
              <IonRouterLink href="/Calculator">
              <IonItem>
                <IonThumbnail slot="start">
                    <img id="img" alt="Silhouette of mountains" src="https://cdn-icons-png.flaticon.com/512/1011/1011863.png" />
                  </IonThumbnail>
                  <IonLabel>Calculator</IonLabel>
              </IonItem>
                </IonRouterLink >

                <IonRouterLink href="/Todolist">
              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://cdn-icons-png.flaticon.com/512/7692/7692809.png" />
                </IonThumbnail>
                <IonLabel>Todo List</IonLabel>
              </IonItem>
              </IonRouterLink >
              <IonItem lines="none">
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Blank</IonLabel>
              </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
    </div>
    </IonContent>
   </IonPage>
  );
};
  export default Home;
