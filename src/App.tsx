import React from 'react'
import { Users } from "./components"
import Styles from "./App.module.css"
//

const App: React.FC = () => {
  return (
    <div className={Styles.container}>
      <Users />
    </div>
  )
}

export default App