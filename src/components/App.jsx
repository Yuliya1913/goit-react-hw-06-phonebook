import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import css from 'components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  // инфа с инпута пришла и записываем в глобальный стейт
  const handleFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // записываем в отдельный массив контакты, которые отфильтровали для поиска из всех контактов по условию в инпуте
  // , чтобы не менять исходный массив контактов
  const visibleTelephone = getVisibleContacts();

  const isContacts = contacts.length > 0;

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {isContacts && <Filter onChange={handleFilter} />}

      {isContacts && <ContactsList contacts={visibleTelephone} />}
    </div>
  );
};
