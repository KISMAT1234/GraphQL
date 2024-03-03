import {useQuery, gql} from '@apollo/client'

const query = gql`
query GetTodosWithUser{
  allUsers{
    username
  }
}
`
function App() {
  const {data, loading} = useQuery(query)

  if(loading) return <h1>Loading...</h1>


  return (
    <>
      <div className="App">
         {JSON.stringify(data)}
      </div>
    
    </>
  )
}

export default App
