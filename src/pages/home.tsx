import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent,
  IonCardSubtitle, IonCardTitle, IonCard, IonList, IonItem, IonThumbnail, IonLabel,
  IonSearchbar
} from '@ionic/react';
import { IonRouterLink } from '@ionic/react';
import './home.css';

const cardData = [
  {
    title: 'Click Counter',
    icon: 'https://img.freepik.com/premium-vector/click-arrow-touch-point-logo-template-design-vector-emblem-design-concept-creative-symbol_20029-363.jpg',
    subtitle: 'Applet #1',
    link: '/Clickcounter'
  },
  {
    title: 'Calculator',
    icon: 'https://cdn-icons-png.flaticon.com/512/1011/1011863.png',
    subtitle: 'Applet #2',
    link: '/Calculator'
  },
  {
    title: 'Todo List',
    icon: 'https://cdn-icons-png.flaticon.com/512/7692/7692809.png',
    subtitle: 'Applet #3',
    link: '/Todolist'
  },
  {
    title: 'Blank',
    icon: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',
    subtitle: 'Applet #4',
    link: ''
  }
];

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

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
              <IonSearchbar
                value={searchTerm}
                onIonInput={(e) => setSearchTerm(e.target.value ?? '')}
              />
              <IonList>
                {cardData
                  .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((card, index) => (
                    <IonRouterLink key={index} href={card.link}>
                      <IonItem>
                        <IonThumbnail slot="start">
                          <img alt="Silhouette of mountains" src={card.icon} />
                        </IonThumbnail>
                        <IonLabel>{card.title}</IonLabel>
                      </IonItem>
                    </IonRouterLink>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;