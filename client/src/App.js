import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import Navbar from "./components/Navbar"
import MainSection from "./components/MainSection"
import instance from './service/axios';
import {eventActions } from './store'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()


  useEffect(() => {
    (async () => {
      try {
        const response = await instance.get('/category');
        const eventResponse = await instance.get('/events')

        dispatch(eventActions.setCategories(response.data.data))
        dispatch(eventActions.setEvents(eventResponse.data.data))
        dispatch(eventActions.setIsLoading(false))

      } catch (error) {
        console.log(error)
        dispatch(eventActions.setIsLoading(false))
      }

    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Wrapper>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="sections">
            <MainSection />
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    .sections{
        display: grid;
        place-items: center;
    }
  `

export default App;
