import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDo from './ToDo';

test('Verificar se título To-Do List é reenderizado corretamente', () => {
  render(<ToDo />);
  expect(screen.getByText(/To-Do List/i)).toBeInTheDocument();
});

test('Adição de nova tarefa e verificar se a mesma aparece na lista', () => {
  render(<ToDo />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

test('Alteração do estado de conclusão de uma tarefa e verifica se atualiza corretamente', () => {
  render(<ToDo />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/Add/i));
  fireEvent.click(screen.getByText(/Complete/i));
  expect(screen.getByText(/New Task/i)).toHaveClass('completed');
});
