import Form from '../components/Form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <main>
      <section className={css.section_wrapper}>
        <Form />
        <Filter />
        <ContactsList />
      </section>
    </main>
  );
}
