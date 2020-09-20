export type ContactType = {
  firstName: string;
  lastName: string;
  phone: string;
  gender?: string;
};

const initialState: Array<ContactType> = [
  {
    firstName: 'Барней',
    lastName: 'Стинсовський',
    phone: '+380956319521',
    gender: 'male',
  },
  {
    firstName: 'Робін',
    lastName: 'Щербатська',
    phone: '+380931460123',
    gender: 'female',
  },
  {
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666',
  },
  {
    firstName: 'Лілія',
    lastName: 'Олдровна',
    phone: '+380504691254',
    gender: 'female',
  },
  {
    firstName: 'Маршен',
    lastName: 'Еріксонян',
    phone: '+380739432123',
    gender: 'male',
  },
  {
    firstName: 'Теодор',
    lastName: 'Мотсбес',
    phone: '+380956319521',
    gender: 'male',
  },
];

const postsReducer = (state = initialState, action: any): Array<ContactType> => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
