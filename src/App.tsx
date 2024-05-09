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
import { closeCircle, addCircle, calculatorOutline, ellipse, homeOutline, informationCircle, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/home';
import Profile from './pages/Profile';
import Clickcounter from './pages/Clickcounter';
import Calculator from './pages/Calculator';
import TodoList from './pages/Todolist';
import QouteGenerator from './pages/Qoutegenerator';
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
import QuoteGenerator from './pages/Qoutegenerator';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/ionic-t-sawan-on/home">
            <Home />
          </Route>
          <Route exact path="/ionic-t-sawan-on/profile">
            <Profile />
          </Route>
          <Route exact path="/ionic-t-sawan-on/Clickcounter">
            <Clickcounter />
          </Route>
          <Route path="/ionic-t-sawan-on/Calculator">
            <Calculator />
          </Route>
          <Route exact path="/ionic-t-sawan-on/Todolist">
          <TodoList />
          </Route>
          <Route exact path="/ionic-t-sawan-on/Qoutegenerator">
          <QuoteGenerator />
          </Route>
          <Route exact path="/ionic-t-sawan-on/notes">
          <Notes />
          </Route>
          <Route exact path="/ionic-t-sawan-on/">
            <Redirect to="/ionic-t-sawan-on/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">

          <IonTabButton tab="home" href="/ionic-t-sawan-on/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton>
            <IonIcon aria-hidden="true" icon={closeCircle} /> 
            <IonLabel>Blank</IonLabel>
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
