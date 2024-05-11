import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {  home, informationCircle, calculator, closeCircle } from 'ionicons/icons'; // Import necessary icons
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home';
import Profile from './pages/Profile';
import Tab2 from './pages/Clickcounter';
import Tab3 from './pages/Calculator';
import ToDoList from './pages/Todolist';
import QuoteGenerator from './pages/Qoutegenerator';
import Notes from './pages/notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ionic-t-sawan-on/home">
            <Home />
          </Route>
          <Route exact path="/ionic-t-sawan-on/Profile">
            <Profile />
          </Route>
          <Route exact path="/ionic-t-sawan-on/Clickcounter">
            <Tab2 />
          </Route>
          <Route exact path="/ionic-t-sawan-on/Calculator">
            <Tab3 />
            </Route>
          <Route exact path="/ionic-t-sawan-on/Todolist">
            <ToDoList />
          </Route>
          <Route path="/ionic-t-sawan-on/Qoutegenerator">
            <QuoteGenerator />
          </Route>
          <Route path="/ionic-t-sawan-on/notes">
            <Notes />
          </Route>
          
          <Route exact path="/ionic-t-sawan-on/">
            <Redirect to="/ionic-t-sawan-on/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/ionic-t-sawan-on/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/ionic-t-sawan-on/Profile">
            <IonIcon aria-hidden="true" icon={informationCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;