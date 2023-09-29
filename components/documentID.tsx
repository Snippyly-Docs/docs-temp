import { v4 as uuidv4 } from 'uuid';

export function documentID(type: string) {
  if (typeof window === 'undefined') {
    return;
  }
  const storedDoumentID = sessionStorage.getItem(type);
  if (storedDoumentID) {
    return storedDoumentID;
  }
  const newDocumentID = uuidv4();
  sessionStorage.setItem(type, newDocumentID);
  return newDocumentID;
}
