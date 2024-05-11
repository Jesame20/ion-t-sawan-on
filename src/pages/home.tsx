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
  IonBadge,
  IonThumbnail
} from '@ionic/react';

//Custom CSS
import './home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil, chatbubble, readerOutline, logoIonic,logoFirebase, logoReact} from 'ionicons/icons';

const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/ionic-t-sawan-on/clickcounter',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }

  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/ionic-t-sawan-on/Calculator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/ionic-t-sawan-on/Todolist',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/ionic-t-sawan-on/Qoutegenerator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/ionic-t-sawan-on/notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact, 
      tag3: logoFirebase 
    }
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
