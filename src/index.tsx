import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css'

// Находим корневой элемент
const rootElement = document.getElementById('root');

// Проверяем, что элемент существует
if (rootElement) {
  // Создаем корневой элемент
  const root = createRoot(rootElement);
  // Рендерим приложение
  root.render(<App />);
} else {
  console.error('Root element not found');
}