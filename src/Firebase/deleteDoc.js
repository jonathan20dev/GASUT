import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
//(╯°□°）╯︵ ┻━┻
const deleteDocument = async (collection,id) => {
  const document = doc(db, collection, id);
  await deleteDoc(document);
};

export { deleteDocument };
