import createReducer from 'config/createReducer';
import { Map } from 'immutable';

const getDefaultState = () => (
  Map({
    data: Map()
  })
);

const currentUser = createReducer(getDefaultState(), {});


export default currentUser;
