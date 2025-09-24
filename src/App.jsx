
import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Issuemanage from './Components/Issuemanage'
import Loader from './Components/Loader'

const fetchIssue = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {

const fetchPromise = fetchIssue()


  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Loader></Loader>}>
      <Issuemanage fetchPromise={fetchPromise}></Issuemanage>
      </Suspense>
    </>
  )
}

export default App
