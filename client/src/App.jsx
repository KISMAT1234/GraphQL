import {useQuery, gql} from '@apollo/client'

const query = gql`
query GetTodosWithUser{
  getTodos{
    id
    title 
    completed
    user{
      id name
    }
  }
}
`




function App() {
  const {data, loading} = useQuery(query)

  if(loading) return <h1>Loading...</h1>


  return (
    <>
      <div>
         {JSON.stringify(data)}
      </div>
    
    </>
  )
}

export default App
