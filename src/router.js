import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/employeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Please Login' />
      </Scene>

      <Scene key='main'>
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees'
        />

        <Scene key='employeeCreate' title='Create Employee' component={EmployeeCreate} />
        <Scene key='employeeEdit' title='Edit Employee' component={EmployeeEdit} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
