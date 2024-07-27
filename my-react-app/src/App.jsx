import UserGreeting from './ConditionalRendering/UserGreeting.jsx';
import Student from './Props/Student.jsx'
import List from './List/List.jsx';
import Button from './Click Event/Button.jsx';
import MyComponent from './UseState/MyComponent.jsx';
import ColorPicker from './ColorPicker.jsx';
import OnChange from './Onchange/OnChange.jsx';
import MyComponent2 from './UseState/MyComponent2.jsx';
import MyComponent3 from './UseState/MyComponent3.jsx';
import Hero from './Hero.jsx';

function App() {
  return (
    <>
      {/* <Student name="Gourab" age={30} isStudent={true}/>
      <Student name="Gou" age={90} isStudent={false}/> */}
      {/* <UserGreeting isLoggedIn={true} username="Gourab"/> */}
      {/* <List></List> */}
      {/* <Button></Button> */}
      {/* <MyComponent></MyComponent> */}

      {/* <OnChange></OnChange> */}
      {/* <ColorPicker></ColorPicker> */}
      {/* <MyComponent2></MyComponent2> */}
      {/* <MyComponent3></MyComponent3> */}
      <Hero></Hero>
    </>
  );
}
export default App
