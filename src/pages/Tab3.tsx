import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/react';
import './Tab3.css';

const Tab3 = () => {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <IonGrid className="calculator">
      <IonRow>
        <IonCol size="12">
          <IonInput className="display" value={input} readonly></IonInput>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('7')}>7</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('8')}>8</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="btn" onClick={() => handleClick('9')}>9</IonButton>
        </IonCol>
        <IonCol size="3">
          <IonButton className="operator" onClick={() => handleClick('/')}>/</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        {/* Other buttons */}
      </IonRow>
      <IonRow>
        {/* Other rows of buttons */}
      </IonRow>
      <IonRow>
        {/* Equal and Clear buttons */}
      </IonRow>
    </IonGrid>
  );
};

export default Tab3;