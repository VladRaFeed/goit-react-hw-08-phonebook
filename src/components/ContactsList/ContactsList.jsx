import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/store/operations';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/store/selectors/selectors';
import toast from 'react-hot-toast';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.contacts_section}>
      {isLoading && <Loader />}
      <h2 className={css.contacts_title}>Contacts</h2>
      <ul className={css.contacts_list}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contact_item}>
            <p className={css.contact_name}>
              {contact.name}: {contact.phone}
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
                toast.success('Contact delete on your list');
              }}
              className={css.contact_delete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
