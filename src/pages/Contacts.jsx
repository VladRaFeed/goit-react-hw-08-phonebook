import Form from '../components/Form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

export default function Contacts() {
  return (
    <main>
      <section>
        <Form />
        <Filter />
        <ContactsList />
      </section>
    </main>
  );
}
