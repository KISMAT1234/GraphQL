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
  console.log(data);

  if(loading) return <h1>Loading...</h1>


  return (
    <>
      <div className="App">
         {/* {JSON.stringify(data)} */}
         <table>
            <tbody>
               {
                data.allUsers.map(item =>
                  <td>{item.username}</td>
                  )
               }
            </tbody>
         </table>
      </div>
    
    </>
  )
}


export default App
