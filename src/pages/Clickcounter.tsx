import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonPage } from '@ionic/react';
import './Clickcounter.css';

const ClickCounter: React.FC = () => {
    // State variable to keep track of the click count
    const [clickCount, setClickCount] = useState(0);

    // Function to reset the click counter
    const resetClickCount = () => {
        setClickCount(0);
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardContent className="click-counter">
                        {/* Display click count and reset button side by side */}
                        <div className="click-count-reset-container">
                            <div className="click-counter-text">Click Count: {clickCount}</div>
                            <IonButton
                                onClick={resetClickCount}
                                color="secondary"
                                className="reset-button"
                            >
                                Reset Counter
                            </IonButton>
                        </div>

                        {/* Button that increments click count */}
                        <IonButton
                            onClick={() => setClickCount(clickCount + 1)}
                            color="primary"
                            expand="full"
                            className="click-button"
                        >
                            Click Me
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ClickCounter;
