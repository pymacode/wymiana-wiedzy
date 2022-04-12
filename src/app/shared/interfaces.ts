//Interfaces for the app

export interface Workspace {
  id: string;
  name: string;
  //owner: User?
  template: Property[];
  flashcards: Flashcard[];
}

export interface Property {
  name: string;
  value: string[];
}

export interface Flashcard {
  id: string;
  title: string;
  tags: string[];
  properties: Property[];
  url: string;
  description: string;
  backlinks: Flashcard[];
}
