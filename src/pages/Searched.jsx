import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log("getSearched" + params.search);

    // 이전 검색어 목록 가져오기
    const previousSearches = localStorage.getItem("searchedRecipes") || "[]";
    let searchesArray = JSON.parse(previousSearches);

    // 중복 검색어 확인 후 추가
    if (!searchesArray.includes(name)) {
      searchesArray.push(name);
    }

    // 최대 검색어 개수를 제한하고 로컬 스토리지에 저장
    const maxSearches = 10; // 예를 들어, 최대 10개의 검색어를 유지하도록 설정
    if (searchesArray.length > maxSearches) {
      searchesArray = searchesArray.slice(-maxSearches);
    }
    localStorage.setItem("searchedRecipes", JSON.stringify(searchesArray));

    // 현재 검색어를 로컬 스토리지에 저장
    localStorage.setItem("lastSearched", name);
  };

  useEffect(() => {
    const savedRecipes = localStorage.getItem("searchedRecipes");
    const lastSearched = localStorage.getItem("lastSearched");

    if (savedRecipes && lastSearched === params.search) {
      // 저장된 검색 결과를 사용
      setSearchedRecipes(JSON.parse(savedRecipes));
    } else {
      // API 요청을 보내고 검색 결과를 저장
      getSearched(params.search);
      console.log("useEffect" + params.search);
    }
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        console.log("return" + params.search);

        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
