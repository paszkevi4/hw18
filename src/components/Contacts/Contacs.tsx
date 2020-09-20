import React from 'react';
// @ts-ignore
import { ContactType } from '../../store/contactsReducer';
import { Contact } from './Contact/Contact';

interface IState {
  showMale: boolean;
  showFemale: boolean;
  showNotGiven: boolean;
  searchValue: string | null;
  contacts: Array<ContactType>;
}

interface IProps {
  contacts: Array<ContactType>;
}

class Contacts extends React.Component<any, IState> {
  state = {
    showMale: true,
    showFemale: true,
    showNotGiven: false,
    searchValue: '',
    contacts: this.props.contacts,
  };

  inputHandler = (e: any): void => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  arrange = (arr: Array<ContactType>): Array<ContactType> => {
    let result: Array<ContactType> = [];
    const sortByFirstName = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.sort((a: ContactType, b: ContactType) => (a.firstName > b.firstName ? 1 : -1));
    };

    const showMale = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.filter((contact) => contact.gender === 'male');
    };
    const showFemale = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.filter((contact) => contact.gender === 'female');
    };
    const showNotGiven = (arr: Array<ContactType>): Array<ContactType> => {
      return arr.filter((contact) => !contact.gender);
    };

    if (this.state.showMale) result = [...result, ...showMale(arr)];
    if (this.state.showFemale) result = [...result, ...showFemale(arr)];
    if (this.state.showNotGiven) result = result = [...result, ...showNotGiven(arr)];

    result = sortByFirstName(result);
    return result;
  };

  filterItself = (contact: ContactType): boolean => {
    const checkLastName = (): boolean => {
      return contact.lastName.toLowerCase().includes(this.state.searchValue.toLowerCase());
    };
    const checkFirstName = (): boolean => {
      return contact.firstName.toLowerCase().includes(this.state.searchValue.toLowerCase());
    };
    const checkPhone = (): boolean => {
      return contact.phone.includes(this.state.searchValue);
    };
    return checkLastName() || checkFirstName() || checkPhone();
  };

  searchFilter = (arr: Array<ContactType>): Array<ContactType> => {
    return arr.filter((contact) => {
      return this.filterItself(contact);
    });
  };

  render() {
    return (
      <div className="contacts">
        <input
          className="contacts_input"
          value={this.state.searchValue}
          onChange={this.inputHandler}
        />
        <div>
          <input
            type="checkbox"
            id="showMale"
            defaultChecked={this.state.showMale}
            onClick={() => {
              this.setState({
                showMale: !this.state.showMale,
              });
            }}
          />
          <label htmlFor="showMale">show male</label>
          <input
            type="checkbox"
            id="showFemale"
            defaultChecked={this.state.showFemale}
            onClick={() => {
              this.setState({
                showFemale: !this.state.showFemale,
              });
            }}
          />
          <label htmlFor="showFemale">show female</label>
          <input
            type="checkbox"
            id="showNotGiven"
            defaultChecked={this.state.showNotGiven}
            onClick={() => {
              this.setState({
                showNotGiven: !this.state.showNotGiven,
              });
            }}
          />
          <label htmlFor="showNotGiven">show not given</label>
        </div>
        {this.searchFilter(this.arrange(this.props.contacts)).map((el: ContactType, i: number) => {
          return <Contact key={i} {...el} />;
        })}
      </div>
    );
  }
}

export default Contacts;
