import Contacts from './Contacs';
import { connect } from 'react-redux';
import { RootReducerType } from '../../store/store';

const mapStateToProps = (store: RootReducerType) => {
  return {
    contacts: store.contacts,
  };
};

export default connect(mapStateToProps, null)(Contacts);
