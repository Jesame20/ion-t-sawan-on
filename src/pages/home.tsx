import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent,
  IonCard, IonList, IonItem, IonThumbnail, IonLabel, IonSearchbar
} from '@ionic/react';
import { IonRouterLink } from '@ionic/react';
import './home.css';

const cardData = [
  {
    title: 'Click Counter',
    icon: 'https://img.freepik.com/premium-vector/click-arrow-touch-point-logo-template-design-vector-emblem-design-concept-creative-symbol_20029-363.jpg',
    subtitle: 'Applet #1',
    link: '/ionic-t-sawan-on/Clickcounter'
  },
  {
    title: 'Calculator',
    icon: 'https://cdn-icons-png.flaticon.com/512/1011/1011863.png',
    subtitle: 'Applet #2',
    link: '/ionic-t-sawan-on/Calculator'
  },
  {
    title: 'Todo List',
    icon: 'https://cdn-icons-png.flaticon.com/512/7692/7692809.png',
    subtitle: 'Applet #3',
    link: '/ionic-t-sawan-on/Todolist'
  },
  {
    title: 'Qoute Generator',
    icon: 'https://www.kindpng.com/picc/m/215-2151039_online-boiler-quote-online-quotation-icon-hd-png.png',
    subtitle: 'Applet #4',
    link: '/ionic-t-sawan-on/Qoutegenerator'
  },
  {
    title: 'notes',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHir7MNRUzSV7t9qIWADMteoLORYFQJAyhs_JW27VdoDjnGJWUnKqh1oXwr0Nw1-uZZo&usqp=CAU',
    subtitle: 'Applet #5',
    link: '/ionic-t-sawan-on/notes'
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
                    <IonCard key={index} routerLink={card.link} routerDirection='forward'>
                      <IonItem>
                        <IonThumbnail slot="start">
                          <img alt="Silhouette of mountains" src={card.icon} />
                        </IonThumbnail>
                        <IonLabel>{card.title}</IonLabel>
                      </IonItem>
                    </IonCard>
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
