
import React, { useState } from 'react';
import HRLogin from './HRLogin';
import EmployeeLogin from './EmployeeLogin'; 

function Login() {
  const [selectedRole, setSelectedRole] = useState(null); 

  return (
    <div>
      <h1>Login as:</h1>
      <div>
        <label>
          <input
            type="radio"
            value="HR"
            checked={selectedRole === 'HR'}
            onChange={() => setSelectedRole('HR')}
          />
          HR
        </label>
        <label>
          <input
            type="radio"
            value="Employee"
            checked={selectedRole === 'Employee'}
            onChange={() => setSelectedRole('Employee')}
          />
          Employee
        </label>
      </div>
     
      {selectedRole === 'HR' ? <HRLogin /> : selectedRole === 'Employee' && <EmployeeLogin />}
    </div>
  );
}

export default Login;
