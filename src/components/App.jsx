import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import css from 'components/App.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  //т.к.начальное значение useState contacts зависит от данных пришедших из localStorage, то в начальное значение записываем
  // функцию, которая вернет значения из localStorage или по умолчанию [], если данных не будет, функция выполнится один раз при первом рендере
  // (ленивая инициализация состояния)
  const [,] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  // если изменились(обновились) данные(добавила или удалила контакт), то сохраняем итоговый список контактов в localStorage

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = event => {
    // в свойсво filter объекта контакта добавляем значение введенное в инпут для фильтра
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // записываем в отдельный массив контакты, которые отфильтровали для поиска из всех контактов по условию в инпуте
  //  и записываем в качестве пропса для рендера списков контакта по условию, чтобы не менять исходный массив контактов
  const visibleTelephone = getVisibleContacts();

  const isContacts = contacts.length > 0;

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {isContacts && <Filter value={filter} onChange={handleFilter} />}

      {isContacts && (
        <ContactsList
          contacts={visibleTelephone}
          // onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
};
