import styled from "styled-components";
import Card from "./Card";
import Loader from "./ui/Loader";
import { useSelector } from "react-redux";
import { BiMap } from 'react-icons/bi'

const SearchResults = () => {
  const events = useSelector((state) => state.events);
  const isLoading = useSelector((state) => state.isLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <Results>
      {events.length > 0 &&
        events.map((event) => (
          <Card key={event.title}>
            <div className="title">{event.title}</div>
            <div className="tag">{event.category}</div>
            <div className="desc">{event.description}</div>
            <div className="location">
                <BiMap />
                <small>{event.address}</small>
            </div>
            <small className="is-virtual">{ event.isVirtual ? 'Virtual' : 'Physical'}</small>
          </Card>
        ))}
        {
            events.length === 0 && (
                <div className="no-result">
                    <h3>Oops No result found</h3>
                </div>
            )
        }
    </Results>
  );
};

const Results = styled.div`
  display: grid;
  margin: 30px 40px;
  gap: 2rem;
  place-items: center;


  .no-result {
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
  }

  h3 {
      text-align: center;
  }

  .title {
    text-transform: uppercase;
    color: #636e72;
    font-size: 14px;
    font-weight: 600;
    position: relative;
  }
  /* .title::before {
        content: "";
        position: absolute;
        left: 10%;
        top: 70%;
        width: 50px;
        height: 4px;
        transform: skew(-12deg) translateX(-50%);
        background: rgba(238,111,87,0.5);
        z-index: -1;
    } */
  .desc {
    margin-top: 20px;
    /* text-align: justify; */
  }
  .tag {
    padding: 0.1rem 0.8rem;
    background: rgba(238, 111, 87, 0.5);
    color: #fff;
    border-radius: 3px;
    border: none;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
    width: fit-content;
  }
  .is-virtual {
      position: absolute;
      right: 10px;
      bottom: 10px;
      font-size: 12px;
  }

  .location {
      margin-top: 10px;
      display: flex;
      align-items: center ;
      gap: 4px;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 1199px) and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export default SearchResults;
