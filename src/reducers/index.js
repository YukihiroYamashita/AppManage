import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import employeeFormReducer from './employeeFormReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: employeeFormReducer,
  employees: employeeReducer
});