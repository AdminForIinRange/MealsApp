import {useContext} from 'react'
import { AppContext } from '../context/Context'

function MealsComponent() {
    const context = useContext(AppContext);
    console.log(context); // Check the value in the console
  
    return <h1>Meals Component</h1>;
  }
  
  export default MealsComponent;