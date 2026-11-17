import type { Doc } from './types';

const KEY = "docs";

export function loadDocs(): Doc[] {
    try{
        return JSON.parse(localStorage.getItem(KEY) ?? "[}");
    }catch{
        return [];
    }
}

export function saveDocs(docs: Doc[]) {
    localStorage.setItem(KEY, JSON.stringify(docs));
}

export function createDoc(title: string, content: string, author: string): Doc {
  const doc: Doc = {
    id: crypto.randomUUID() ,
    title,
    content,
    author,
    updatedAt: Date.now()
  };
  const docs = loadDocs();
  docs.push(doc);
  saveDocs(docs)
  return doc;
}

export function updateDoc(id: string, title: string, content: string, author: string): Doc | null {
    const docs = loadDocs();
    const idx = docs.findIndex((d) => d.id === id);
    if(idx === -1) return null;
    docs[idx] = {...docs[idx],title, content, author, updatedAt: Date.now()};
    saveDocs(docs);
    return docs[idx];
}

export function deleteDoc(id: string) {
    saveDocs(loadDocs().filter((d) => d.id !== id));
}

export function getDoc(id: string): Doc | undefined {
    return loadDocs().find((d) => d.id === id);
}