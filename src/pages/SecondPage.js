import React, {useEffect, useContext}  from 'react'
import { fetchGetTodoData } from '../apis/index'
import { Store } from '../store/index'
import { GET_DATA2 } from '../actions/index'
import SecondCard from '../components/SecondCard'

const SecondPage = () => {
    const {globalState, setGlobalState} = useContext(Store)
      useEffect(() => {
        fetchGetTodoData().then(res => {
            console.log(res.data)
          setGlobalState({
            type: GET_DATA2,
            data: res.data
          })
        })
      }, [])
      console.log(globalState)
      return (
        <div style={{display: 'flex', flexWrap:'wrap'}}>
          {
            globalState.user_data.map((user, index) => {
              return (
                <SecondCard user={user} key={index} />
              )
            })
          }
        </div>
      )
}

export default SecondPage