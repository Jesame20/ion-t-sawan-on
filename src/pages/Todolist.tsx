import React, { useState } from 'react';
import './style.css';
import './Todolist.css';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/react';
import { arrowBack, homeOutline, checkmarkOutline, squareOutline, closeCircleOutline } from 'ionicons/icons';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a ToDo app', completed: false },
    { id: 3, text: 'Deploy the app', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodoText.trim(), completed: false }]);
    setNewTodoText('');
  };

  return (
    <IonPage className="general-background">
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonToolbar>
      <IonButton routerDirection="root" routerLink="/home">
          <IonIcon aria-hidden="true" icon={arrowBack} />
          </IonButton>
        </IonToolbar>
      <IonContent fullscreen>
      <div className="todolist-container">
      <header>
        <h1>Organize, prioritize, conquer</h1>
      </header>
        <IonCard>
          <IonCardContent className="todo-list">
            {todos.map((todo) => (
              <div key={todo.id} className="todo-item">
                <IonItem>
                  <IonLabel className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                  </IonLabel>
                  <IonIcon
                    slot="end"
                    icon={todo.completed ? checkmarkOutline : squareOutline}
                    onClick={() => toggleCompleted(todo.id)}
                    className="todo-complete-button"
                  />
                  <IonIcon
                    slot="end"
                    icon={closeCircleOutline}
                    onClick={() => removeTodo(todo.id)}
                    className="todo-remove-button"
                  />
                </IonItem>
              </div>
            ))}
            <form onSubmit={handleAddTodo}>
              <IonInput
                value={newTodoText}
                onIonChange={(e) => setNewTodoText(e.detail.value!)}
                placeholder="Add a new ToDo"
              />
              <IonButton type="submit" color="primary" expand="full" className="add-button">
                Add ToDo
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;