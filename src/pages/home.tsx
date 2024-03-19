import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardHeader, 
    IonCardSubtitle, IonCardTitle,
} from '@ionic/react';

// CSS
//import './profile.css';

  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
          <IonCardHeader>
        <IonCardTitle>Jesame C. Sawan-on</IonCardTitle>
        <IonCardSubtitle>Student</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>WELCOME TO MY APP!</IonCardContent>

        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };

  //
  export default Home;
