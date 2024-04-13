import React from 'react';
import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardHeader, 
    IonCardSubtitle, IonCardTitle,
} from '@ionic/react';

// CSS
import './home.css';


  const Home: React.FC = () => {
    return (
      <IonPage>
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
      <section className="features-section">
  <h2>Features</h2>
  <div className="feature">
    <h3>Track Your Progress</h3>
    <p>Use our Click Counter to keep track of your progress.</p>
    <img src="/src/assets\img/clickcounter.png" alt="Track Your Progress" />
  </div>
  <div className="feature">
    <h3>Efficient Calculations</h3>
    <p>Our Calculator tool makes complex calculations a breeze.</p>
    <img src="/src/assets\img/calculator.png" alt="Efficient Calculations" />
  </div>
</section>
      <footer>
        <p>Contact me for more info: jcsawanonshs@gmail.com</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
    </IonContent>
   </IonPage>
  );
};
  export default Home;
