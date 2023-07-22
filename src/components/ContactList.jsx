import css from './contact.module.css';
import { Contact } from './Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from '../redux/selectors.js';

export const ContactList = () => {
  const ContactsArray = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {!!isLoading && <b>Loading ...</b>}
      <ul className={css.contactsItem}>
        {!!ContactsArray &&
          ContactsArray.map(el => (
            <Contact
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.phone}
            ></Contact>
          ))}
      </ul>
    </div>
  );
};