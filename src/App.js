import React, { Suspense } from 'react'
import { useResource } from './resource'
import { Posts } from './Posts'
import { Users } from './Users'

const resource = useResource()

function App() {
  return (
    <div className="container">
      <h1>Suspense for Data Fetching</h1>

      {/* <Suspense fallback={<p>Loading posts...</p>}>
        <Posts resource={resource} />
      </Suspense>

      <Suspense fallback={<p>Loading users...</p>}>
        <Users resource={resource} />
      </Suspense> */}

      <Suspense fallback={<p>Loading...</p>}>
        <Posts resource={resource} />
        <Users resource={resource} />
      </Suspense>
    </div>
  )
}

export default App
