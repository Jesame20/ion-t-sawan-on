import { Redirect, Route } from 'react-router-dom';
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
import { calculatorOutline, ellipse, home, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';

import Home from './pages/home';
import Profile from './pages/Profile';
import ClickCounter from './pages/Clickcounter'; 
import Calculator from './pages/Calculator';
import Todolist from './pages/Todolist';
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
          
          {/* Application default route */}
           <Route exact path="/ionic-t-sawan-on/">
            <Redirect to="/ionic-t-sawan-on/home" />
          </Route>

          <Route exact path="/ionic-t-sawan-on/home">
            <Home />
          </Route>

          <Route exact path="/ionic-t-sawan-on/Profile">
            <Profile />
          </Route>
          <Route exact path="/ionic-t-sawan-on/Clickcounter">
            <ClickCounter />
          </Route>
          <Route path="/ionic-t-sawan-on/Calculator">
            <Calculator />
          </Route>

          <Route path="/ionic-t-sawan-on/Todolist">
            <Todolist />
          </Route>

          <Route path="/ionic-t-sawan-on/Qoutegenerator">
            <QuoteGenerator />
          </Route>

          <Route path="/ionic-t-sawan-on/notes">
            <Notes />
          </Route>

        </IonRouterOutlet>

      {/* Tab Buttons */}
        <IonTabBar slot="bottom">

          <IonTabButton tab="home" href="/ionic-t-sawan-on/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
       
          <IonTabButton tab="profile" href="/ionic-t-sawan-on/Profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
      
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;