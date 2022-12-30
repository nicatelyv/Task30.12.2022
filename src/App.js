import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import './App.css';
function App() {
  const [data,setData] = useState([])
  return (
    <div className='App'>
      <Formik
        initialValues={{
          name:"",
          email: "",
          lastname:"",
          about:"",
          phonenumber:"",
        }}
        onSubmit={(values)=>{
          setData(prevState=>[...prevState,values])
          console.log(values);
        }} 
        >
        {(props)=>(
          <Form className='inputs'>
            <Field className="input" name="name" placeholder="Name..."/>
            <Field className="input" name="lastname"placeholder="Last Name..."/>
            <Field className="input" name="email" type="email" placeholder="Enter e-mail adres..."/>
            <Field className="input" name="phonenumber" type="number" placeholder="Phone Number..."/>
            <Field className="input" name="about" type="text" placeholder="About..."/>
            <button type='submit'>Submit</button>
            </Form>
        )} 
      </Formik>
      {
        <ul>
          {data.map((element,index)=>{
            return (
              <li key={index}>
                <p>Name: {element.name}</p>
                <p>Last Name: {element.lastname}</p>
                <p>E-mail: {element.email}</p>
                <p>Phone Number: {element.phonenumber}</p>
                <p>About: {element.about}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  );
}
export default App;