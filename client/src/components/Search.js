import { useState } from "react";
import styled from "styled-components";
import instance from "../service/axios";
import { useSelector, useDispatch } from "react-redux";
import { eventActions } from "../store";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const option = useSelector((state) => state.filterOptions);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeRadio = (event) => {
    dispatch(eventActions.addFilterOption(event.target.value));
  };

  const handleClick = async () => {
    dispatch(eventActions.setIsLoading(true));
    try {
      const url =
        option === "category"
          ? `/events?category=${value}`
          : `/events?title=${value}`;
      const response = await instance.get(url);
      dispatch(eventActions.setEvents(response.data.data));
      dispatch(eventActions.setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(eventActions.setIsLoading(false));
    }
  };
  return (
    <>
      <SearchForm>
        <input value={value} type="text" onChange={handleChange} />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </SearchForm>
      <Radio className="radio">
        <div>
          <input
            type="radio"
            value="category"
            id="category"
            name="filter"
            checked={option === "category"}
            onChange={handleChangeRadio}
          />
          <label htmlFor="cat">Category</label>
        </div>
        <div>
          <input
            type="radio"
            value="title"
            id="title"
            name="filter"
            checked={option === "title"}
            onChange={handleChangeRadio}
          />
          <label htmlFor="title">Title</label>
        </div>
      </Radio>
    </>
  );
};

const Radio = styled.div`
  gap: 10px;
  justify-content: center;
  margin-top: 10px;

  display: flex;

  @media only screen and (max-width: 1025px) {
    display: flex;
    /* transform: translateX(0%); */
  }
`;

const SearchForm = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  margin-top: 120px;

  button {
    padding: 10px 20px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.4s;
    font-size: 14px;
    font-weight: 600;
  }
  button:hover {
    background: #fff;
    color: #000;
  }

  input {
    padding: 10px 20px;
    width: 600px;
  }

  @media only screen and (max-width: 1025px) {
    input {
      width: 80%;
    }
  }

  @media only screen and (max-width: 802px) {
    input {
      width: 60%;
    }
  }
`;

export default Search;
